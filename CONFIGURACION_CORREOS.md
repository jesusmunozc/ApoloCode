# 📧 CONFIGURACIÓN DEL SISTEMA DE CORREOS - APOLOCODE

## 🎯 PASOS PARA ACTIVAR EL ENVÍO DE CORREOS

### 1. CONFIGURAR GMAIL PARA APLICACIONES

**⚠️ IMPORTANTE: No uses tu contraseña normal de Gmail**

#### Paso 1: Activar verificación en 2 pasos

1. Ve a https://myaccount.google.com/security
2. En "Acceder a Google", activa "Verificación en 2 pasos"
3. Sigue las instrucciones para configurarlo

#### Paso 2: Generar contraseña de aplicación

1. Ve a https://myaccount.google.com/apppasswords
2. En "Seleccionar aplicación", elige "Correo"
3. En "Seleccionar dispositivo", elige "Otro (nombre personalizado)"
4. Escribe "ApoloCode Website"
5. Haz clic en "Generar"
6. **Copia la contraseña de 16 caracteres que aparece**

### 2. CONFIGURAR LAS VARIABLES DE ENTORNO

Edita el archivo `.env.local` en la raíz del proyecto:

```env
# Reemplaza estos valores con los tuyos:
EMAIL_USER=tu-correo@gmail.com
EMAIL_PASS=la-contraseña-de-aplicacion-de-16-caracteres
```

**Ejemplo:**

```env
EMAIL_USER=jesus@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

### 3. VERIFICAR QUE FUNCIONA

1. Guarda el archivo `.env.local`
2. Reinicia el servidor de desarrollo: `npm run dev`
3. Ve a la sección de contacto de tu página
4. Llena el formulario y envía un mensaje de prueba
5. Revisa tu bandeja de entrada

## 🔧 CARACTERÍSTICAS DEL SISTEMA

✅ **Envío automático de correos**
✅ **Formato HTML profesional**
✅ **Validación de campos requeridos**
✅ **Mensajes de estado (enviando, éxito, error)**
✅ **Bilingüe (Español/Inglés)**
✅ **Formulario se limpia automáticamente después del envío**
✅ **Seguridad: variables de entorno protegidas**

## 📨 FORMATO DEL CORREO QUE RECIBIRÁS

El correo incluirá:

- **Asunto:** "Nuevo mensaje de contacto de [Nombre]"
- **Información del contacto:** Nombre, email, empresa (si se proporciona)
- **Mensaje completo** con formato profesional
- **Marca de origen:** ApoloCode

## 🚨 SOLUCIÓN DE PROBLEMAS

### Error: "Authentication failed"

- Verifica que EMAIL_USER y EMAIL_PASS estén correctos
- Asegúrate de usar una contraseña de aplicación, no tu contraseña normal
- Verifica que la verificación en 2 pasos esté activada

### Error: "Connection timeout"

- Verifica tu conexión a internet
- Algunos antivirus bloquean conexiones SMTP

### El correo no llega

- Revisa tu carpeta de spam
- Verifica que el EMAIL_USER sea correcto
- Asegúrate de que Gmail no esté bloqueando la aplicación

## 🔒 SEGURIDAD

- ✅ Las credenciales están en `.env.local` (no se suben a git)
- ✅ La API route valida los datos de entrada
- ✅ Se usa HTTPS para las comunicaciones
- ✅ No se exponen credenciales en el frontend

## 📞 SOPORTE

Si necesitas ayuda adicional:

1. Verifica que todos los pasos estén completos
2. Revisa la consola del navegador para errores
3. Verifica los logs del servidor de desarrollo

¡Una vez configurado, el sistema funcionará automáticamente para todos los mensajes de contacto! 🚀
