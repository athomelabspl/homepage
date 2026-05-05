## 1. Información general

- **Nombre de la aplicación**: Breakup Reset
- **Responsable del tratamiento**: CommunicateIT Agnieszka Twardosz, os. Piastów 5/41, 31-623 Kraków, NIP: 9512512357
- **Correo de contacto**: athomelabs.studio@gmail.com

El Responsable es el responsable del tratamiento de sus datos personales en lo que respecta a los datos que usted facilita voluntariamente en la aplicación o que se tratan durante el uso de la aplicación.

Si el Responsable designa un Delegado de Protección de Datos (DPD), sus datos de contacto se indicarán en una actualización de esta política. En la fecha indicada en el encabezado del documento, los asuntos relativos a datos personales se gestionan a través del correo electrónico indicado arriba.

---

## 2. Qué datos tratamos (resumen)

A continuación describimos las categorías de datos y dónde suelen almacenarse (**en el servidor** o **localmente en el dispositivo**). Según las funciones que utilice, algunas categorías pueden no aplicarle.

### 2.1 Datos de cuenta e inicio de sesión

- dirección de correo electrónico
- datos de autenticación (contraseña no en texto plano; el proveedor de autenticación la almacena cifrada/hasheada)
- datos de inicio de sesión/sesión (p. ej., marcas de tiempo; en los registros del sistema también pueden aparecer datos técnicos como IP y agente de usuario)
- si utiliza inicio de sesión externo (p. ej., Google): identificadores y datos de perfil proporcionados por el proveedor de inicio de sesión en el marco de OAuth

**Dónde se almacenan**: en el servidor (Supabase Auth).

### 2.2 Datos de perfil y ajustes en la aplicación

Según lo que complete en la aplicación, puede incluir, entre otros:

- nombre/alias mostrado en la aplicación (si lo facilita)
- idioma, zona horaria
- (opcional) datos relativos a preferencias lingüísticas y/o variantes de idioma en la aplicación, incluida la elección de `user_gender` / `ex_gender` (se utilizan para personalizar contenido lingüístico)

**Dónde se almacenan**: en el servidor (perfil y ajustes) y parcialmente de forma local (caché de ajustes/estados).

### 2.3 Datos de progreso en el programa

- puntos, rachas, fechas de actividad y días completados
- retos completados
- información sobre si se completó el cuestionario y el propio resultado/tipo (p. ej., tipo de personalidad y componentes del resultado)

**Dónde se almacenan**: en el servidor (progreso y resultado del cuestionario) y parcialmente de forma local (caché de progreso/resultado).

### 2.3A Historial del check-in diario de emociones (local)

- la etiqueta de emoción diaria que selecciona en el check-in (p. ej., sad, numb, okay)
- marcas de tiempo e identificadores de día usados para mostrar su historial reciente en la aplicación

**Dónde se almacena**: localmente en su dispositivo (AsyncStorage). Este historial se usa para mostrar sus últimos días y no necesita almacenarse en su cuenta backend.

### 2.4 Contenidos sensibles / contenidos introducidos por el usuario (si utiliza estas funciones)

La aplicación puede almacenar contenidos introducidos por usted, en particular:

- notas asociadas a retos completados (campo “notes”)
- entradas de diario/reflexiones (pueden almacenarse localmente en el dispositivo, según la función)

Este tipo de entradas puede contener información sensible en sentido coloquial (p. ej., descripciones de relaciones, emociones). No recomendamos introducir datos que no quiera almacenar.

**Dónde se almacenan**: las notas de retos pueden almacenarse en el servidor; el diario/reflexiones puede almacenarse localmente en el dispositivo (según la función).

### 2.5 Notificaciones

Si activa las notificaciones, tratamos:

- token de notificaciones push del dispositivo (Expo push token)
- ajustes y preferencias de notificaciones (activar/desactivar, tipos, hora, zona horaria)

**Dónde se almacenan**: en el servidor (token y preferencias) y localmente en el dispositivo (notificaciones programadas localmente).

### 2.6 (Opcional) Datos de pasos / movimiento (reconocimiento de un paseo)

Si activa la función de **reconocimientos suaves de movimiento** (p. ej., un mensaje tipo “Hoy hubo paseo. Cuenta.”), la aplicación puede leer el **número de pasos del dispositivo** (Motion & Fitness / Activity Recognition) con el fin de:

- **reconocer una vez al día** el movimiento en la aplicación,
- **(opcional) marcar automáticamente** como completado un reto relacionado con paseo/movimiento si la aplicación detecta que ya ha caminado ese día.

**Qué almacenamos exactamente**:

- preferencias de esta función (activar/desactivar, forma de entrega: pop-up/push),
- **bandera “si el reconocimiento de movimiento ya se mostró hoy”** (lo que se conoce como *once-per-day gating*),
- (opcional) bandera “si la aplicación automática a retos ya se realizó hoy”.

No creamos un “panel de fitness” en la aplicación y, por regla general, **no guardamos el historial de pasos** en su cuenta backend como parte de esta función.

**Dónde se almacenan**: localmente en el dispositivo (AsyncStorage). Los datos de pasos se usan para calcular la señal “movimiento hoy” y no es necesario enviarlos al servidor.

### 2.7 Datos analíticos (analítica de producto)

La aplicación puede recopilar datos analíticos sobre el uso (p. ej., eventos, propiedades de eventos, versión de la aplicación, plataforma, idioma, días desde la instalación) para desarrollar el producto y mejorar su funcionamiento. Para ello utilizamos PostHog (detalles abajo).

Podemos incluir **señales de uso no identificativas** como propiedades de eventos en la analítica (p. ej., la etiqueta de emoción diaria seleccionada como “sad” o “anxious”). No enviamos a la analítica el **texto del diario** ni otros contenidos de texto libre que usted introduzca.

**Dónde se tratan**: con el proveedor de analítica (PostHog).

### 2.8 Compras (apoyo voluntario de la aplicación)

Si realiza una compra “Support the App”, tratamos información sobre el derecho (entitlement) y el estado de apoyo a través de RevenueCat y de las tiendas de la plataforma (Apple App Store / Google Play).

**Dónde se tratan**: con el proveedor de pagos/suscripciones (RevenueCat) y en las tiendas de la plataforma; la aplicación puede almacenar en caché localmente el estado de apoyo.

---

## 3. Finalidades del tratamiento

Tratamos datos para las siguientes finalidades:

- **crear y gestionar la cuenta** (registro, inicio de sesión, restablecimiento de contraseña, gestión de sesión)
- **prestar funciones de la aplicación** (progreso, cuestionario, personalización de contenido, preferencias)
- **notificaciones** (si las activa): recordatorios y comunicaciones sobre progreso/logros
- **analítica de producto**: comprender el funcionamiento de la aplicación y mejorar la calidad (PostHog)
- **gestionar el apoyo financiero a la aplicación** (si lo utiliza): verificación de derechos y estado de apoyo (RevenueCat)
- **marketing / newsletter**: solo si **otorga su consentimiento (opt-in)** y solo en la medida en que la función esté habilitada

---

## 3A. Bases jurídicas del tratamiento (art. 6 RGPD)

Según la finalidad, tratamos los datos sobre la base de:

- **art. 6.1.b RGPD (contrato / prestación del servicio)**:
  - crear y gestionar la cuenta
  - prestar funciones de la aplicación (progreso, cuestionario, personalización dentro del funcionamiento de la aplicación)
  - notificaciones, si resultan de los ajustes y del funcionamiento de la aplicación (la activación de notificaciones en el dispositivo es voluntaria)
- **art. 6.1.f RGPD (interés legítimo del Responsable)**:
  - garantizar la seguridad, prevenir abusos, diagnosticar errores, mantener la infraestructura y ejercer/defender reclamaciones
  - analítica básica del funcionamiento de la aplicación en la medida necesaria para su mantenimiento y mejora (si no requiere consentimiento en una configuración determinada)
- **art. 6.1.a RGPD (consentimiento)**:
  - marketing/newsletter (si están habilitados) – únicamente tras su opt-in voluntario
  - analítica de producto (si, en una configuración determinada, se requiere consentimiento, p. ej., por el alcance de los datos o transferencias fuera del EEE)

Si el tratamiento se basa en el consentimiento, usted puede retirarlo en cualquier momento, sin que ello afecte a la licitud del tratamiento realizado antes de su retirada.

---

## 4. Dónde y cómo almacenamos los datos

### 4.1 Almacenamiento en el servidor (backend)

Utilizamos Supabase como backend de la aplicación (autenticación, base de datos, funciones del servidor, notificaciones).

Del análisis técnico:

- el proyecto de Supabase está en la región **`eu-central-1`**
- Supabase Storage (archivos) está actualmente vacío (sin buckets/objetos en el momento del análisis)

### 4.2 Almacenamiento en el dispositivo (local)

La aplicación almacena parte de los datos localmente en el dispositivo (AsyncStorage), p. ej., progreso, resultado del cuestionario y (según las funciones utilizadas) entradas de diario/reflexiones y otros datos auxiliares.

Si activa la función de reconocimientos suaves de movimiento (pasos), la aplicación almacena localmente **únicamente las preferencias de esta función** y **banderas diarias** que evitan mostrar el mensaje más de una vez al día (sin necesidad de guardar historial de pasos).

El mecanismo de limpieza de datos locales al eliminar la cuenta está implementado en la aplicación. En la práctica, incluye la eliminación de, entre otros, datos locales de progreso, historial y contenidos guardados en la memoria de la aplicación (el alcance puede variar según las funciones utilizadas y la versión de la aplicación).

---

## 5. Con quién compartimos los datos (destinatarios / encargados del tratamiento)

Según las funciones utilizadas, los datos pueden ser tratados por los siguientes proveedores:

### 5.1 Supabase (hosting del backend y la base de datos, autenticación)

- Supabase trata datos de cuenta y sesión, así como datos de la aplicación almacenados en la base de datos (p. ej., progreso, perfil, preferencias, notas de retos).

### 5.2 PostHog (analítica de producto)

- PostHog trata datos analíticos de eventos y propiedades de eventos.
- En la configuración actual de la aplicación, la ingestión de analítica está configurada en el endpoint de la UE `https://eu.i.posthog.com`. Según la configuración del proveedor, el tratamiento de analítica aún puede implicar transferencias fuera del EEE.

### 5.3 Proveedores de pago / tiendas

- Apple App Store / Google Play y RevenueCat para pagos y verificación de derechos.

### 5.4 Proveedores de notificaciones

- Expo/Apple/Google para la entrega técnica de notificaciones push (token del dispositivo y entrega).

### 5.5 Personas autorizadas

- Personas autorizadas por el Responsable pueden tener acceso a los datos en la medida necesaria para el mantenimiento y desarrollo de la aplicación.

---

## 6. Seguridad

Aplicamos medidas técnicas y organizativas adecuadas a los riesgos del tratamiento.

En función de las tecnologías utilizadas:

- la transmisión de datos a servicios backend se realiza mediante un canal cifrado (TLS/HTTPS)
- los datos de autenticación son tratados por Supabase Auth (las contraseñas se almacenan en forma no legible; en Supabase es visible la columna `encrypted_password`)
- los proveedores de infraestructura pueden mantener registros técnicos (p. ej., por seguridad y diagnóstico)

---

## 7. Conservación de los datos

Conservamos los datos:

- **datos de cuenta y perfil**: durante el tiempo que la cuenta esté activa, y después hasta la eliminación de la cuenta o la tramitación efectiva de una solicitud de eliminación (con las excepciones legales aplicables)
- **datos de progreso y resultados en la aplicación**: durante el tiempo que la cuenta esté activa o hasta la eliminación de la cuenta
- **notificaciones**: token push y preferencias – hasta desactivar las notificaciones, retirar el permiso de notificaciones en el sistema operativo o eliminar la cuenta
- **datos de marketing (si está habilitado y si se otorgó consentimiento)**: hasta retirar el consentimiento o darse de baja de las comunicaciones de marketing, o hasta que los datos ya no sean necesarios para la finalidad para la que se recopilaron
- **registros técnicos y datos de seguridad**: durante el periodo necesario para garantizar la seguridad, detectar abusos y realizar diagnósticos (los periodos de conservación pueden variar según el proveedor de infraestructura)

Si se definen periodos de conservación concretos (p. ej., para los registros), el Responsable los indicará en una actualización de la política.

---

## 8. Sus derechos

Usted tiene derecho a:

- acceso a los datos
- rectificación de los datos
- supresión de los datos
- limitación del tratamiento
- portabilidad de los datos
- oposición (en la medida prevista por la ley)

Usted tiene derecho a presentar una reclamación ante el Presidente de la autoridad polaca de protección de datos personales (UODO).

### 8.1 Cómo ejercer sus derechos

Para ejercer sus derechos, contacte con el Responsable por correo electrónico: **athomelabs.studio@gmail.com**.

Para facilitar la tramitación de su solicitud, describa qué derecho está ejerciendo (p. ej., acceso, supresión) e indique el identificador de su cuenta (p. ej., el correo utilizado en la aplicación). El Responsable puede solicitar información adicional únicamente en la medida necesaria para verificar la identidad.

---

## 8A. Elaboración de perfiles y toma de decisiones automatizada (art. 22 RGPD)

La aplicación puede utilizar datos de uso y resultados del cuestionario para **personalizar contenidos y recomendaciones** (p. ej., adaptar contenidos al tipo de personalidad o al progreso).

El Responsable **no adopta** decisiones sobre usted basadas exclusivamente en un tratamiento automatizado que produzca efectos jurídicos sobre usted o le afecte significativamente de modo similar (en el sentido del art. 22 RGPD).

---

## 9. Transferencias fuera del EEE / a terceros países

Según la configuración de los proveedores y las funciones que utilice:

- En la configuración auditada, Supabase opera en una región de la UE (`eu-central-1`).
- PostHog: la ingestión de analítica está configurada en `https://eu.i.posthog.com`. Según la configuración del proveedor y su uso de funciones, el tratamiento aún puede implicar transferencias fuera del EEE.
- Las tiendas (Apple/Google) y los proveedores de notificaciones pueden tratar datos en distintas jurisdicciones.

Cuando existan transferencias fuera del EEE, se aplican los mecanismos de cumplimiento proporcionados por los proveedores (p. ej., cláusulas contractuales tipo), en la medida en que sean necesarios.

---

## 9A. Si la aportación de datos es obligatoria

- **Datos de cuenta (correo electrónico, datos de inicio de sesión)**: necesarios para crear y gestionar una cuenta en la aplicación.
- **Datos de perfil (p. ej., alias, `user_gender`, `ex_gender`)**: en general, voluntarios; la ausencia puede limitar la personalización de contenidos.
- **Notificaciones**: voluntarias; la falta de permiso en el sistema operativo implica que no habrá notificaciones push.
- **Datos de pasos/movimiento (reconocimiento de paseo)**: voluntarios; la función solo opera tras activarla en la aplicación y conceder el permiso en el sistema operativo. Puede desactivarla en cualquier momento.
- **Analítica**: si hay ajustes de privacidad disponibles en la aplicación, puede limitar/desactivar la analítica (siempre que no sea necesaria para la seguridad y el funcionamiento de la aplicación).

---

## 9B. Datos de menores

La aplicación no está dirigida a menores. Si el Responsable tiene conocimiento de que trata datos de un menor sin base jurídica, tomará medidas para eliminarlos.

---

## 10. Contacto

Para asuntos relativos a la protección de datos personales, contacte con el Responsable:

- **Correo electrónico**: athomelabs.studio@gmail.com

