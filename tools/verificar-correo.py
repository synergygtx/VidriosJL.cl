"""Verifica la configuracion de correo de vidriosjl.cl contra DNS publico."""

import sys
import dns.resolver

DOMINIO = sys.argv[1] if len(sys.argv) > 1 else "vidriosjl.cl"

# Selectores DKIM habituales de Zoho. Se puede pasar el real como 2do argumento.
SELECTORES = [sys.argv[2]] if len(sys.argv) > 2 else ["zoho", "zmail", "default"]

resolver = dns.resolver.Resolver()
resolver.nameservers = ["8.8.8.8", "1.1.1.1"]


def consultar(nombre, tipo):
    try:
        return [r.to_text() for r in resolver.resolve(nombre, tipo)]
    except Exception:
        return []


def check(ok, titulo, detalle=""):
    print(f"  [{'OK ' if ok else 'FALTA'}] {titulo}")
    if detalle:
        for linea in detalle.splitlines():
            print(f"           {linea}")


print(f"\nVerificando correo de {DOMINIO}\n" + "=" * 46)

# 1. MX
mx = consultar(DOMINIO, "MX")
mx_ordenado = sorted(mx, key=lambda x: int(x.split()[0]))
es_zoho = any("zoho" in m.lower() for m in mx)
print("\n1. Entrega de correo (MX)")
check(bool(mx), "Existen registros MX", "\n".join(mx_ordenado) if mx else "")
if mx:
    check(es_zoho, "Apuntan a Zoho")
    check(len(mx) >= 2, f"Hay respaldo ({len(mx)} servidores)")

# 2. SPF
txt = consultar(DOMINIO, "TXT")
spf = [t for t in txt if "v=spf1" in t]
print("\n2. Autorizacion de envio (SPF)")
check(bool(spf), "Existe registro SPF", "\n".join(spf))
if len(spf) > 1:
    check(False, "Hay MAS DE UN SPF -> invalida la configuracion, debe quedar solo uno")
if spf and "zoho" not in spf[0].lower():
    check(False, "El SPF no incluye a Zoho")

# 3. DKIM
print("\n3. Firma del correo (DKIM)")
encontrado = False
for sel in SELECTORES:
    reg = consultar(f"{sel}._domainkey.{DOMINIO}", "TXT")
    if reg:
        check(True, f"DKIM presente con selector '{sel}'")
        encontrado = True
        break
if not encontrado:
    check(False, f"No se encontro DKIM (probe: {', '.join(SELECTORES)})",
          "Si Zoho te dio otro selector, pasalo como 2do argumento.")

# 4. DMARC
dmarc = consultar(f"_dmarc.{DOMINIO}", "TXT")
print("\n4. Politica antisuplantacion (DMARC)")
check(bool(dmarc), "Existe registro DMARC", "\n".join(dmarc))

# 5. El sitio sigue vivo
print("\n5. El sitio web no se afecto")
a = consultar(DOMINIO, "A") + consultar(DOMINIO, "CNAME")
www = consultar(f"www.{DOMINIO}", "A") + consultar(f"www.{DOMINIO}", "CNAME")
check(bool(a), f"{DOMINIO} resuelve", "\n".join(a))
check(bool(www), f"www.{DOMINIO} resuelve", "\n".join(www))

print("\n" + "=" * 46)
