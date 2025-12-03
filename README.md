# 📦 Publicación de Paquetes del Monorepo

Este repositorio contiene múltiples paquetes independientes (atoms, molecules, organisms).
Cada uno se publica por separado en GitHub Package Registry bajo el scope:

`@fabiancienc`


Sigue estos pasos para publicar o actualizar un paquete.

## 🔑 1. Crear un Token Personal (PAT)

Necesitas un token de GitHub con permisos para leer y publicar paquetes.

1 Ve a:
https://github.com/settings/tokens?type=beta

2 Crea un token con permisos:

- read:packages

- write:packages

3. Copia el token.
Lo usaremos como GITHUB_TOKEN.

## ⚙️ 2. Crear el archivo .npmrc (solo una vez)

En la raíz del repositorio, crea un archivo llamado:

```bash
.npmrc
```

Con el siguiente contenido:

```bash
@fabiancienc:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
always-auth=true
```

Este archivo indica a NPM que publique todos los paquetes del scope
`@fabiancienc` en GitHub Package Registry.

## 📤 3. Publicar un paquete individual

Cada componente tiene su propio `package.json`
y se publica de manera independiente.

### Para publicar:

1. Navega a la carpeta del paquete:
```bash
cd packages/atoms/button-primary
```

2. Ejecuta:
```bash
npm publish
```

Si es la primera vez, se publicará como la versión definida.

Si ya existe esa versión, deberás actualizar el número de versión en el `package.json`:
```bash
"version": "1.0.1"
```

## 📌 Resumen rápido
| Acción | Comando |
|--------|---------|
| Crear token | GitHub Settings → Tokens (read/write packages) |
| Configurar `.npmrc` | Copiar el snippet en el archivo raíz |
| Ir al paquete | `cd packages/...` |
| Publicar | `npm publish` |

## ❓ ¿Problemas?

- Si dice que la versión ya existe → incrementa "version"

- Si dice “no autorizado” → revisa el token en .npmrc

- Si otro proyecto quiere usar tus paquetes → también necesita un .npmrc similar pero con token solo con read:packages