# Configuración de reCAPTCHA

Este proyecto ahora incluye protección reCAPTCHA en el formulario de contacto para prevenir spam y bots.

## Instrucciones para configurar Google reCAPTCHA v2

### 1. Crear las claves de reCAPTCHA

1. Ve a la consola de Google reCAPTCHA: https://www.google.com/recaptcha/admin/create
2. Inicia sesión con tu cuenta de Google
3. Llena el formulario:
   - **Label**: Un nombre para identificar tu sitio (ej: "ApoloCode Website")
   - **reCAPTCHA type**: Selecciona "reCAPTCHA v2"
   - **Challenge type**: Selecciona "I'm not a robot" Checkbox
   - **Domains**: Agrega tu dominio:
     - Para desarrollo local: `localhost`
     - Para producción: tu dominio (ej: `apolocode.com`)
4. Acepta los términos de servicio
5. Haz clic en "Submit"

### 2. Obtener las claves

Después de crear el sitio, obtendrás dos claves:

- **Site Key (Clave del sitio)**: Es pública y se usa en el frontend
- **Secret Key (Clave secreta)**: Es privada y se usa en el backend

### 3. Configurar las variables de entorno

Abre el archivo `.env.local` y reemplaza los valores de prueba con tus claves reales:

```bash
# Google reCAPTCHA v2 keys
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu-clave-publica-aqui
RECAPTCHA_SECRET_KEY=tu-clave-secreta-aqui
```

### 4. Reiniciar el servidor de desarrollo

Después de actualizar las variables de entorno, reinicia tu servidor de desarrollo:

```bash
npm run dev
```

## Funcionalidad implementada

- ✅ reCAPTCHA v2 integrado en el formulario de contacto
- ✅ Verificación del lado del cliente y del servidor
- ✅ Mensajes de error en español e inglés
- ✅ El botón de envío se deshabilita hasta completar el captcha
- ✅ Reset automático del captcha después de envío exitoso
- ✅ Validación de token en el API backend

## Solución de problemas

### Error: "reCAPTCHA couldn't find user-provided function"

- Asegúrate de que las claves estén configuradas correctamente
- Verifica que el dominio esté agregado en la configuración de reCAPTCHA

### Error: "Invalid site key"

- Verifica que `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` esté correcta
- Asegúrate de usar la clave del sitio (site key), no la clave secreta

### Error: "Verificación de captcha fallida"

- Verifica que `RECAPTCHA_SECRET_KEY` esté correcta en el servidor
- Asegúrate de que el token no haya expirado (los tokens de reCAPTCHA expiran después de 2 minutos)

## Configuración de dominios adicionales

Para agregar dominios adicionales (staging, producción):

1. Ve a https://www.google.com/recaptcha/admin
2. Selecciona tu sitio
3. En "Settings" → "Domains", agrega los nuevos dominios
4. Guarda los cambios

## Seguridad

- Las claves secretas nunca deben exponerse en el código del cliente
- Siempre verifica el token reCAPTCHA en el servidor antes de procesar el formulario
- Los tokens de reCAPTCHA son de un solo uso y expiran automáticamente
