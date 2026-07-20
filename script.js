//Criação de uma timeline do GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({
   scrollTrigger:{
      trigger: '.two',
      start: '0% 95%',
      end: '70% 50%',
      scrub: true,
      markers: false, //DEPURAÇÃO
   },
});

tl.to(
   '#fanta',
   {
      top: '120%', //MOVE O ELEMENTO COM ID "FANTA" PARA 120% DO TOPO
      left: '0%',
   },
   'orange'
); //Nomeando esse trecho de animação como 'orange' para 

tl.to(
   '#laranja-cortada',
   {
      top: '160%', //MOVE O ELEMENTO COM ID "LARANJA-CORTADA" PARA 160% DO TOPO
      left: '23%', //MOVE O ELEMENTO PARA 23% DA ESQUERDA
   },
   'orange'
); //sincornizando com a animação nomeada orange

tl.to(
   '#laranja',
   {
      width: '15%', //REDUZ A LARGURA DO ELEMENTO COM ID "LARANJA" PARA 15%
      top: '170%', //MOVE O ELEMENTO PARA 160% DO TOPO
      right: '10%', //MOVE O ELEMENTO PARA 10% DA ESQUERDA
   },
   'orange'
); //sincornizando com a animação nomeada orange

tl.to(
   '#folha',
   {
      top: '110%', //REDUZ A LARGURA DO ELEMENTO COM ID "FOLHA" PARA 110% DO TOPO
      rotate: '530deg', //ROTACIONA O ELEMENTO EM 130 GRAUS
      left: '70%', //MOVE O ELEMENTO PARA 70% DA ESQUERDA
   },
   'orange'
); //sincornizando com a animação nomeada orange

tl.to(
   '#folha2',
   {
      top: '110%', //REDUZ A LARGURA DO ELEMENTO COM ID "FOLHA" PARA 110% DO TOPO
      rotate: '530deg', //ROTACIONA O ELEMENTO EM 130 GRAUS
      left: '0%', //MOVE O ELEMENTO PARA 70% DA ESQUERDA
   },
   'orange'
); //sincornizando com a animação nomeada orange

//CRIANDO OUTRA TIMELINE

var tl2 = gsap.timeline({
   scrollTrigger:{
      trigger: '.three',
      start: '0% 95%',
      end: '20% 50%', //Fim da animação o topo da tela atinge 50% da altura quando estiver 20% da sessão three
      scrub: true,
      markers: false, //DEPURAÇÃO
   },
});

//Definindo a animação dos elementos com a timeline 'tl2'

tl2.from(
   '.lemon1',
   {
      rotate: '-90deg', //Inicia o elemento com classe 'lemon1' rotacionando-o em -90 graus
      left: '-100%', //Inicia o elemento fora da tela, à esquerda (-100%)
      top: '110%', //Inicia o elemento ligeiramente abaixo da tela (110%) do topo
   },
   'ca'
);//Nomeando esse trecho de animação com 'ca' para sincronização

tl2.from(
   '#cocacola',
   {
      rotate: '-90deg', //Inicia o elemento com classe 'lemon1' rotacionando-o em -90 graus
      left: '-100%', //Inicia o elemento fora da tela, à esquerda (-100%)
      top: '110%', //Inicia o elemento ligeiramente abaixo da tela (110%) do topo
   },
   'ca'
);//Sincronizando com a animação nomeada de 'ca'

tl2.from(
   '.lemon2',
   {
      rotate: '90deg', //Inicia o elemento com classe 'lemon1' rotacionando-o em 90 graus
      left: '100%', //Inicia o elemento fora da tela, à esquerda (100%)
      top: '110%', //Inicia o elemento ligeiramente abaixo da tela (110%) do topo
   },
   'ca'
);//Sincronizando com a animação nomeada de 'ca'

tl2.from(
   '#pepsi',
   {
      rotate: '90deg', //Inicia o elemento com classe 'lemon1' rotacionando-o em 90 graus
      left: '100%', //Inicia o elemento fora da tela, à esquerda (100%)
      top: '110%', //Inicia o elemento ligeiramente abaixo da tela (110%) do topo
   },
   'ca'
);//Sincronizando com a animação nomeada de 'ca'

tl2.to(
   '#laranja-cortada',
   {
      width: '18%', //Aumenta a largura do elemento com id "laranja-cortada" para 18%
      left: '41%', //Move o elemento para 42% da esquerda
      top: '204%', //Move o elemento para 204% do topo
   }
);

tl2.to(
   '#fanta',
   {
      width: '35%', //Aumenta a largura do elemento com id "laranja-cortada" para 18%
      left: '33%', //Move o elemento para 42% da esquerda
      top: '210%', //Move o elemento para 204% do topo
   }
);