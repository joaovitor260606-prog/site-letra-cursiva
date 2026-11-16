/* =====================================================================
   CONFIGURAÇÃO DA PÁGINA: edite só este arquivo
   ===================================================================== */

/* 1) LINKS DE CHECKOUT ------------------------------------------------
   Cole os links da sua plataforma (Kiwify, Hotmart, Cakto, etc.).
   Enquanto estiverem vazios, os botões de compra levam pra #oferta.   */
window.CHECKOUT = {
  basico: "https://pay.cakto.com.br/3bih4w3_1238346",   // Plano Básico R$15,90
  premium: "https://pay.cakto.com.br/rf9khxm_1238170",  // Plano Premium R$25,90
  premiumDownsell: "https://pay.cakto.com.br/3ey3cmn"   // Premium com desconto do pop-up (R$21,90)
};

/* 1b) TIMER DA OFERTA -------------------------------------------------------
   Cada visitante tem X minutos a partir da primeira visita (recarregar não reinicia).
   Quando o tempo acaba, só a mensagem da barra muda. Preços e links continuam iguais. */
window.OFERTA = {
  minutos: 15,
  mensagemFim: "⏰ O tempo acabou, mas a oferta ainda está disponível. Garanta a sua!"
};

/* 2) IMAGENS REAIS DO PRODUTO (opcional) -----------------------------------
   Quando tiver o mockup/fotos reais, coloque o caminho aqui
   (ex.: "img/mockup-hero.webp"). Vazio = usa o mockup desenhado na página.
   Dica: use .webp com no máximo ~1200px de largura.                    */
window.IMAGENS = {
  heroMockup: "",      // composição principal do topo
  tudoQueRecebe: ""    // composição "tudo que você recebe", perto da oferta
};

/* 3) FEEDBACKS REAIS --------------------------------------------------------
   NUNCA invente feedback. Adicione só prints/mensagens reais, com autorização.
   Se a lista estiver vazia, a seção some da página publicada.

   Cada item pode ter:
     imagem:    caminho do print (WhatsApp/Instagram), ex.: "img/feedbacks/wpp-01.webp"
     texto:     feedback em texto (use quando não tiver print)
     nome:      nome abreviado, ex.: "Juliana M."
     descricao: ex.: "Mãe de criança de 8 anos" ou "Professora do 2º ano"
     foto:      (opcional) foto da pessoa, ex.: "img/feedbacks/juliana.webp"
     origem:    (opcional) "whatsapp" | "instagram" | "texto"

   Exemplo (descomente e troque pelos seus):
   { imagem: "img/feedbacks/wpp-01.webp", nome: "Juliana M.", descricao: "Mãe de criança de 7 anos", origem: "whatsapp" },
   { texto: "Minha filha pede pra fazer a folha do dia!", nome: "Carla S.", descricao: "Mãe de criança de 6 anos", origem: "texto" },
*/
window.FEEDBACKS = [
  // Trechos das imagens recebidas no chat. O print original tem prioridade.
  // Os caminhos das imagens estão preparados; enviar arquivos para public/pagina/img/feedbacks/.
  { imagem: "img/feedbacks/01-emily.webp", texto: "Comecei a fazer as atividades com meu filho e ele gostou bastante. Eu achei que ele ia reclamar porque normalmente ele não tem muita paciência pra ficar treinando a letra, mas como a gente faz só um pouquinho por dia ele está aceitando super bem.", nome: "Emily R.", descricao: "Feedback enviado por mensagem", origem: "whatsapp" },
  { imagem: "img/feedbacks/02-gabriela.webp", texto: "Quando abri vi que tem bastante coisa diferente e que vai avançando aos poucos. Gostei muito. E pra mim isso ajudou porque não sou professora e não saberia montar uma sequência sozinha.", nome: "Gabriela T.", descricao: "Feedback enviado por mensagem", origem: "whatsapp" },
  { imagem: "img/feedbacks/03-juliana.webp", texto: "Já imprimi algumas folhas aqui e achei muito bem feito. Meu filho está naquela fase que a escola começou a pegar mais no pé da letra cursiva e eu não sabia muito como ajudar ele em casa. Já tá ajudando! Principalmente porque agora eu tenho uma direção do que fazer com ele.", nome: "Juliana S.", descricao: "Feedback enviado por mensagem", origem: "whatsapp" },
  { imagem: "img/feedbacks/04-cristina.webp", texto: "A escola começou a cobrar mais a letra cursiva e eu estava sem saber como ajudar meu filho em casa. Já imprimi algumas atividades e achei tudo muito bem explicado. Antes eu pegava qualquer atividade na internet, agora sinto que ele está evoluindo de verdade.", nome: "Cristina L.", descricao: "Feedback enviado por mensagem", origem: "whatsapp" },
  { imagem: "img/feedbacks/05-beatriz.webp", texto: "Quando comprei eu achei que seriam só folhas soltas, mas me surpreendi. Tem bastante atividade diferente e dá pra ver uma evolução certinha. Ter a sequência pronta facilita demais.", nome: "Beatriz A.", descricao: "Feedback enviado por mensagem", origem: "whatsapp" },
  { imagem: "img/feedbacks/06-catarina.webp", texto: "Comecei a aplicar com a minha filha e ela gostou bem mais do que eu imaginava. Antes ela cansava rápido, mas fazendo só um pouco por dia ficou leve. E eu gostei porque já sei exatamente o que fazer em cada etapa.", nome: "Catarina M.", descricao: "Feedback enviado por mensagem", origem: "whatsapp" },
  { imagem: "img/feedbacks/07-bianca.webp", texto: "Meu filho estava bem travado na letra cursiva e eu não sabia por onde começar em casa. Gostei porque já vem tudo em ordem. Em poucos dias ele já está mais confiante e faz sem reclamar tanto.", nome: "Bianca R.", descricao: "Feedback enviado por mensagem", origem: "whatsapp" },
  { imagem: "img/feedbacks/08-fabiana.webp", texto: "Eu já tinha procurado várias atividades de letra cursiva na internet, mas ficava tudo muito solto. Gostei bastante porque nesse material já tem uma sequência certinha pra seguir. Agora eu só pego a atividade e faço com ele.", nome: "Fabiana C.", descricao: "Feedback enviado por mensagem", origem: "whatsapp" }
];
