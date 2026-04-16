## 1. Informações gerais

- **Nome da aplicação**: Breakup Reset
- **Responsável pelo tratamento**: CommunicateIT Agnieszka Twardosz, os. Piastów 5/41, 31-623 Kraków, NIP: 9512512357
- **E-mail de contacto**: athomelabs.studio@gmail.com

O Responsável é o responsável pelo tratamento dos seus dados pessoais no que respeita aos dados que fornece voluntariamente na aplicação ou que são tratados durante a utilização da aplicação.

Se o Responsável designar um Encarregado de Proteção de Dados (EPD), os respetivos contactos serão indicados numa atualização desta política. Na data indicada no cabeçalho do documento, os assuntos relativos a dados pessoais são tratados através do endereço de e-mail acima indicado.

---

## 2. Que dados tratamos (resumo)

Abaixo descrevemos as categorias de dados e onde tipicamente são armazenados (**no servidor** ou **localmente no dispositivo**). Dependendo das funcionalidades que utiliza, algumas categorias podem não se aplicar.

### 2.1 Dados de conta e autenticação

- endereço de e-mail
- dados de autenticação (palavra-passe não em texto simples; o fornecedor de autenticação armazena-a de forma encriptada/hasheada)
- dados de início de sessão/sessão (p. ex., carimbos de data/hora; nos registos do sistema podem também surgir informações técnicas como IP e user agent)
- se utilizar autenticação externa (p. ex., Google): identificadores e dados de perfil transmitidos pelo fornecedor de autenticação no âmbito de OAuth

**Onde armazenamos**: do lado do servidor (Supabase Auth).

### 2.2 Dados de perfil na aplicação e definições

Consoante o que preencher na aplicação, pode incluir, entre outros:

- nome/alias apresentado na aplicação (se fornecer)
- idioma, fuso horário
- (opcional) dados relativos a preferências linguísticas e/ou variantes linguísticas na aplicação, incluindo a escolha de `user_gender` / `ex_gender` (usadas para personalizar conteúdos linguísticos)

**Onde armazenamos**: do lado do servidor (perfil e definições) e parcialmente localmente (cache de definições/estados).

### 2.3 Dados de progresso no programa

- pontos, sequências (streaks), datas de atividade e dias concluídos
- desafios concluídos
- informação sobre se o quiz foi concluído e o próprio resultado/tipo (p. ex., tipo de personalidade e componentes do resultado)

**Onde armazenamos**: do lado do servidor (progresso e resultado do quiz) e parcialmente localmente (cache de progresso/resultado).

### 2.4 Conteúdos sensíveis / conteúdos introduzidos pelo utilizador (se utilizar estas funcionalidades)

A aplicação pode armazenar conteúdos introduzidos por si, em particular:

- notas associadas a desafios concluídos (campo “notes”)
- entradas de diário/reflexões (podem ser armazenadas localmente no dispositivo, consoante a funcionalidade)

Este tipo de entradas pode conter informação sensível num sentido comum (p. ex., descrições de relações, emoções). Não encorajamos a introdução de dados que não queira armazenar.

**Onde armazenamos**: as notas de desafios podem ser armazenadas no servidor; o diário/reflexões pode ser armazenado localmente no dispositivo (consoante a funcionalidade).

### 2.5 Notificações

Se ativar notificações, tratamos:

- token de notificações push do dispositivo (Expo push token)
- definições e preferências de notificações (ativar/desativar, tipos, hora, fuso horário)

**Onde armazenamos**: do lado do servidor (token e preferências) e localmente no dispositivo (notificações agendadas localmente).

### 2.6 (Opcional) Dados de passos / movimento (reconhecimento de uma caminhada)

Se ativar a funcionalidade de **reconhecimentos suaves de movimento** (p. ex., uma mensagem do tipo “Hoje houve caminhada. Conta.”), a aplicação pode ler o **número de passos do dispositivo** (Motion & Fitness / Activity Recognition) com o objetivo de:

- **reconhecer uma vez por dia** o movimento na aplicação,
- **(opcional) marcar automaticamente** como concluído um desafio relacionado com caminhada/movimento se a aplicação detetar que já caminhou nesse dia.

**O que armazenamos exatamente**:

- preferências desta funcionalidade (ativar/desativar, forma de entrega: pop-up/push),
- a **flag “se o reconhecimento de movimento já foi mostrado hoje”** (o chamado *once-per-day gating*),
- (opcional) a flag “se a aplicação automática aos desafios já foi executada hoje”.

Não criamos um “painel de fitness” na aplicação e, por regra, **não guardamos o histórico de passos** na sua conta no backend no âmbito desta funcionalidade.

**Onde armazenamos**: localmente no dispositivo (AsyncStorage). Os dados de passos são usados para calcular o sinal “movimento hoje” e não precisam de ser enviados para o servidor.

### 2.7 Dados analíticos (analítica de produto)

A aplicação pode recolher dados analíticos sobre a utilização (p. ex., eventos, propriedades de eventos, versão da aplicação, plataforma, idioma, dias desde a instalação) para desenvolver o produto e melhorar o funcionamento da aplicação. Para isso, utilizamos PostHog (detalhes abaixo).

**Onde tratamos**: no fornecedor de analítica (PostHog).

### 2.8 Compras (apoio voluntário à aplicação)

Se efetuar uma compra “Support the App”, tratamos informação sobre a permissão (entitlement) e o estado de apoio através do RevenueCat e das lojas da plataforma (Apple App Store / Google Play).

**Onde tratamos**: no fornecedor de pagamentos/subscrições (RevenueCat) e nas lojas da plataforma; a aplicação pode manter em cache localmente o estado de apoio.

---

## 3. Finalidades do tratamento

Tratamos dados para as seguintes finalidades:

- **criação e gestão de conta** (registo, início de sessão, reposição de palavra-passe, gestão de sessão)
- **prestação de funcionalidades da aplicação** (progresso, quiz, personalização de conteúdos, preferências)
- **notificações** (se ativar): lembretes e comunicações sobre progresso/conquistas
- **analítica de produto**: compreender o funcionamento da aplicação e melhorar a qualidade (PostHog)
- **gestão do apoio financeiro à aplicação** (se utilizar): verificação de permissões e estado de apoio (RevenueCat)
- **marketing / newsletter**: apenas se **der consentimento (opt-in)** e apenas na medida em que a funcionalidade estiver ativa

---

## 3A. Bases legais do tratamento (art. 6 RGPD)

Consoante a finalidade, tratamos dados com base em:

- **art. 6.º, n.º 1, al. b) RGPD (contrato / prestação do serviço)**:
  - criação e gestão de conta
  - prestação de funcionalidades da aplicação (progresso, quiz, personalização no âmbito do funcionamento da aplicação)
  - notificações, se resultarem das definições e do funcionamento da aplicação (ativar notificações no dispositivo é voluntário)
- **art. 6.º, n.º 1, al. f) RGPD (interesse legítimo do Responsável)**:
  - garantir segurança, prevenir abusos, diagnosticar erros, manter a infraestrutura e exercer/defender direitos
  - analítica básica do funcionamento da aplicação na medida necessária à manutenção e melhoria (se não exigir consentimento numa dada configuração)
- **art. 6.º, n.º 1, al. a) RGPD (consentimento)**:
  - marketing/newsletter (se ativos) – apenas após o seu opt-in voluntário
  - analítica de produto (se, numa dada configuração, exigir consentimento, p. ex., devido ao âmbito de dados ou transferências para fora do EEE)

Se o tratamento se basear no consentimento, pode retirá-lo a qualquer momento, sem afetar a licitude do tratamento efetuado antes da retirada.

---

## 4. Onde e como armazenamos os dados

### 4.1 Armazenamento no servidor (backend)

Utilizamos Supabase como backend da aplicação (autenticação, base de dados, funções do servidor, notificações).

Da auditoria técnica:

- o projeto Supabase está na região **`eu-central-1`**
- o Supabase Storage (ficheiros) está atualmente vazio (sem buckets/objetos no momento da auditoria)

### 4.2 Armazenamento no dispositivo (local)

A aplicação armazena alguns dados localmente no dispositivo (AsyncStorage), p. ex., progresso, resultado do quiz e (consoante as funcionalidades usadas) entradas de diário/reflexões e outros dados de apoio.

Se ativar a funcionalidade de reconhecimentos suaves de movimento (passos), a aplicação armazena localmente **apenas as preferências desta funcionalidade** e **flags diárias** que evitam mostrar a mensagem mais do que uma vez por dia (sem necessidade de guardar histórico de passos).

O mecanismo de limpeza de dados locais ao eliminar a conta está implementado na aplicação. Na prática, inclui a eliminação de, entre outros, dados locais de progresso, histórico e conteúdos guardados na memória da aplicação (o âmbito pode variar consoante as funcionalidades usadas e a versão da aplicação).

---

## 5. Com quem partilhamos os dados (destinatários / subcontratantes)

Consoante as funcionalidades utilizadas, os dados podem ser tratados pelos seguintes fornecedores:

### 5.1 Supabase (hosting do backend e da base de dados, autenticação)

- A Supabase trata dados de conta e sessão e dados da aplicação guardados na base de dados (p. ex., progresso, perfil, preferências, notas de desafios).

### 5.2 PostHog (analítica de produto)

- A PostHog trata dados analíticos de eventos e propriedades de eventos.
- Da auditoria: na aplicação está configurado o endpoint de ingest `https://us.i.posthog.com` (o que pode significar transferências para os EUA consoante a configuração da conta/região da PostHog).

### 5.3 Fornecedores de pagamento / lojas

- Apple App Store / Google Play e RevenueCat para pagamentos e verificação de permissões.

### 5.4 Fornecedores de notificações

- Expo/Apple/Google para a entrega técnica de notificações push (token do dispositivo e entrega).

### 5.5 Pessoas autorizadas

- Pessoas autorizadas a atuar em nome do Responsável podem ter acesso aos dados na medida necessária para a manutenção e desenvolvimento da aplicação.

---

## 6. Segurança

Aplicamos medidas técnicas e organizativas adequadas aos riscos do tratamento.

Com base nas tecnologias utilizadas:

- a transmissão de dados para serviços backend é feita através de canal encriptado (TLS/HTTPS)
- os dados de autenticação são tratados pela Supabase Auth (as palavras-passe são armazenadas de forma não legível; do lado da Supabase é visível a coluna `encrypted_password`)
- os fornecedores de infraestrutura podem manter registos técnicos (p. ex., por segurança e diagnóstico)

---

## 7. Retenção de dados

Armazenamos dados:

- **dados de conta e perfil**: durante o período de manutenção da conta e, depois, até à eliminação da conta ou ao cumprimento efetivo de um pedido de eliminação (salvo exceções legais)
- **dados de progresso e resultados na aplicação**: durante o período de manutenção da conta ou até à eliminação da conta
- **notificações**: token push e preferências – até desativar as notificações, retirar a autorização de notificações no sistema operativo ou eliminar a conta
- **dados de marketing (se ativo e com consentimento)**: até retirar o consentimento ou cancelar a subscrição das comunicações de marketing, ou até os dados deixarem de ser necessários para a finalidade para a qual foram recolhidos
- **registos técnicos e dados de segurança**: pelo período necessário para garantir segurança, detetar abusos e diagnosticar (os períodos podem variar consoante o fornecedor de infraestrutura)

Se forem definidos períodos de retenção específicos (p. ex., para registos), o Responsável indicá-los-á numa atualização da política.

---

## 8. Os seus direitos

Tem direito a:

- acesso aos dados
- retificação dos dados
- eliminação dos dados
- limitação do tratamento
- portabilidade dos dados
- oposição (na medida prevista por lei)

Tem o direito de apresentar reclamação junto do Presidente da autoridade polaca de proteção de dados pessoais (UODO).

### 8.1 Como exercer os seus direitos

Para exercer os seus direitos, contacte o Responsável por e-mail: **athomelabs.studio@gmail.com**.

Para facilitar o tratamento do pedido, descreva qual o direito que pretende exercer (p. ex., acesso, eliminação) e indique o identificador da conta (p. ex., o e-mail usado na aplicação). O Responsável pode solicitar informações adicionais apenas na medida necessária para verificar a identidade.

---

## 8A. Definição de perfis e decisões automatizadas (art. 22 RGPD)

A aplicação pode utilizar dados de utilização e resultados do quiz para **personalizar conteúdos e recomendações** (p. ex., ajustar conteúdos ao tipo de personalidade ou ao progresso).

O Responsável **não toma** decisões sobre si com base exclusivamente em tratamento automatizado que produza efeitos jurídicos a seu respeito ou que o afete significativamente de forma semelhante (nos termos do art. 22 RGPD).

---

## 9. Transferências para fora do EEE / para países terceiros

Consoante a configuração dos fornecedores e as funcionalidades que utiliza:

- Na configuração auditada, a Supabase opera numa região da UE (`eu-central-1`).
- PostHog: a aplicação utiliza o endpoint de ingest `https://us.i.posthog.com`, o que pode envolver transferências para fora do EEE.
- As lojas (Apple/Google) e fornecedores de notificações podem tratar dados em diferentes jurisdições.

No caso de transferências para fora do EEE, aplicam-se mecanismos de conformidade disponibilizados pelos fornecedores (p. ex., cláusulas contratuais-tipo), na medida em que sejam exigidos.

---

## 9A. Se o fornecimento de dados é obrigatório

- **Dados de conta (e-mail, dados de autenticação)**: necessários para criar e gerir uma conta na aplicação.
- **Dados de perfil (p. ex., alias, `user_gender`, `ex_gender`)**: em regra, voluntários; a ausência pode limitar a personalização de conteúdos.
- **Notificações**: voluntárias; a ausência de autorização no sistema operativo implica ausência de notificações push.
- **Dados de passos/movimento (reconhecimento de caminhada)**: voluntários; a funcionalidade só funciona após ativação na aplicação e concessão de autorização no sistema operativo. Pode desativá-la a qualquer momento.
- **Analítica**: se existirem definições de privacidade na aplicação, pode limitar/desativar a analítica (desde que não seja necessária para garantir a segurança e funcionamento da aplicação).

---

## 9B. Dados de crianças

A aplicação não se destina a crianças. Se o Responsável tomar conhecimento de que trata dados de uma criança sem base legal, tomará medidas para os eliminar.

---

## 10. Contacto

Para assuntos relacionados com a proteção de dados pessoais, contacte o Responsável:

- **E-mail**: athomelabs.studio@gmail.com

