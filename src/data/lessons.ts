import prefacio from "@/assets/Catecismo_Junior_Parte_0_-_Prefacio.mp3.asset.json";
import prefacioRevista from "@/assets/Catecismo_Junior_Parte_0.1_-_Prefacio_A_Edicao_Revista.mp3.asset.json";
import capitulo1 from "@/assets/Catecismo_Junior_Parte_1_-_DEUS.mp3.asset.json";

export interface LessonTrack {
  id: string;
  tapNumber: number | null;
  partNumber: string;
  label: string;
  title: string;
  subtitle?: string;
  summary: string;
  fullText: string;
  references?: string;
  url: string | null;
  isAudioReady: boolean;
}

export const CATECHISM_LESSONS: LessonTrack[] = [
  {
    id: "0",
    tapNumber: null,
    partNumber: "0",
    label: "Parte 0",
    title: "Prefácio",
    subtitle: "Introdução ao Catecismo Júnior",
    summary: "Introdução à doutrina cristã e metodologia de ensino da Igreja Metodista Unida.",
    fullText:
      "Prefácio. Este catecismo foi preparado para a instrução e edificação das crianças e jovens da Igreja Metodista Unida. Apresenta de forma acessível e fiel os fundamentos da nossa fé, alicerçados nas Sagradas Escrituras e na herança wesleyana.",
    url: prefacio.url,
    isAudioReady: true,
  },
  {
    id: "0.1",
    tapNumber: null,
    partNumber: "0.1",
    label: "Parte 0.1",
    title: "Prefácio à Edição Revista",
    subtitle: "Edição Atualizada e Acessível",
    summary: "Atualização da linguagem e inclusão para pessoas com necessidades especiais.",
    fullText:
      "Prefácio à Edição Revista. Esta edição revista visa tornar a mensagem do Evangelho ainda mais clara e acessível a todas as pessoas, promovendo a inclusão plena na vida e no culto da Igreja.",
    url: prefacioRevista.url,
    isAudioReady: true,
  },
  {
    id: "1",
    tapNumber: 1,
    partNumber: "1",
    label: "Parte 1",
    title: "Deus",
    subtitle: "O Criador e Sustentador",
    summary: "Deus é o Criador de todas as coisas, eterno, santo, amoroso e misericordioso.",
    fullText:
      "Deus. Deus é o Criador de todas as coisas, visíveis e invisíveis. Ele é eterno, infinito em poder, sabedoria e bondade. Deus revelou-se plenamente ao mundo através de Seu Filho Jesus Cristo e continua a agir nas nossas vidas pelo poder do Espírito Santo. Deus é amor.",
    references: "Génesis 1:1, João 4:24, 1 João 4:8",
    url: capitulo1.url,
    isAudioReady: true,
  },
  {
    id: "2",
    tapNumber: 2,
    partNumber: "2",
    label: "Parte 2",
    title: "O Homem",
    subtitle: "Criatura à Imagem de Deus",
    summary: "O ser humano criado à imagem e semelhança de Deus, com corpo e alma imortal.",
    fullText:
      "O Homem. Nesta lição, pretende-se que o catecúmeno conheça as principais características do ser humano como criatura de Deus, suas diferenças e semelhanças com outras criaturas do reino animal. No último dia da criação, disse Deus: 'Façamos o homem à nossa imagem, conforme a nossa semelhança' (Génesis 1:26). Então, Ele terminou Seu trabalho com um toque pessoal: Deus formou o homem do pó e deu-lhe vida, compartilhando de Seu próprio fôlego (Génesis 2:7). Desta forma, o homem é o único dentre toda a criação de Deus que tem uma parte material (corpo) e outra imaterial (alma, espírito). Em termos bem simples, ter a imagem e semelhança de Deus significa que o homem foi feito para se parecer com Deus. A imagem de Deus refere-se à parte imaterial do homem; ela separa o homem do mundo animal, dá-lhe domínio sobre os outros animais e capacita-o a ter comunhão com seu Criador. É uma semelhança mental, moral e social. O homem tem a capacidade de raciocinar, falar e distinguir entre o bem e o mal. Por outro lado, o homem se assemelha aos animais porque tem corpo que nasce, cresce, reproduz-se e morre. A consciência é a voz que ouvimos no nosso íntimo, que nos aconselha a praticar o bem e nos censura quando praticamos o mal. A consciência foi-nos dada por Deus. A parte imaterial do homem, a alma, não acaba com a morte do corpo e vive eternamente. O dever de todo o homem é obedecer à vontade de nosso Pai celestial.",
    references: "Salmo 8, Romanos 8:14, Génesis 1:26-28",
    url: null,
    isAudioReady: true,
  },
  {
    id: "3",
    tapNumber: 3,
    partNumber: "3",
    label: "Parte 3",
    title: "O Pecado",
    subtitle: "A Queda e a Necessidade de Graça",
    summary: "O pecado como alheamento de Deus e corrupção das relações humanas.",
    fullText:
      "O Pecado. Ao fim desta lição, o catecúmeno deverá saber o que é pecado, quais são as suas consequências e efeitos, e quem peca. Pecado é a condição de alheamento de Deus que afeta toda a humanidade. Pecados são ações, palavras e pensamentos específicos que derivam da nossa condição pecadora, e que negam a presença, o poder e o propósito de Deus. O pecado impede o efeito da graça divina, corrompe as nossas relações com Ele e uns com os outros, com o mundo onde vivemos e connosco próprios. O efeito do pecado é a discórdia, onde Deus pretendia harmonia. O resultado primário do pecado é a escravidão, é muito mais que simples transgressão. Não somente nos aliena de Deus, como também nos leva ao cativeiro da incerteza e perdição. O pecado é um atentado perigoso contra o ambiente vital: não polui somente a nós, mas todos os aspetos da nossa existência, todas as estruturas da vida humana e da sociedade no seu todo. Todas as pessoas pecam.",
    references: "Marcos 7:21-23, Romanos 6:23, Tiago 4:1-3, 1 João 1:8, Romanos 3:23, Salmos 51",
    url: null,
    isAudioReady: true,
  },
  {
    id: "4",
    tapNumber: 4,
    partNumber: "4",
    label: "Parte 4",
    title: "Jesus Cristo",
    subtitle: "O Salvador do Mundo",
    summary: "A missão, morte na cruz e gloriosa ressurreição de Cristo.",
    fullText:
      "Jesus Cristo. O catecúmeno deverá ao fim desta lição conhecer Jesus Cristo e a sua missão na Terra. Deverá também saber sobre a morte e ressurreição de Jesus. A palavra Cristo vem do grego Christos, que significa 'Ungido', comparada ao termo hebraico Messias. Jesus é o Cristo porque n'Ele toda a plenitude de Deus habita, e através d'Ele Deus reconciliou todas as coisas (Colossenses 1:19-20). Jesus é o Messias esperado que, tendo nascido como homem, libertou a humanidade. A missão de Cristo foi proclamar a boa nova do Reino de Deus, chamar as pessoas para vir e viver neste reino mediante o arrependimento dos pecados para entrar numa vida obediente à Sua vontade. Jesus veio para revelar Deus à humanidade, morrendo numa humilhante e cruel cruz de madeira. Porém, Deus trouxe-O de novo à vida, ressuscitando-O dos mortos! Ele venceu a morte e abriu a oportunidade de acesso ao Reino de Deus para todos os que se arrependem e creem n'Ele. Ao terceiro dia, domingo de manhã, ressuscitou. Jesus deu a Grande Comissão: 'É-me dado todo o poder no céu e na terra. Portanto ide, ensinai todas as nações, batizando-as em nome do Pai, do Filho e do Espírito Santo' (Mateus 28:19-20).",
    references: "Colossenses 1:19-20, Mateus 28:19-20, Lucas 24",
    url: null,
    isAudioReady: true,
  },
  {
    id: "5",
    tapNumber: 5,
    partNumber: "5",
    label: "Parte 5",
    title: "O Evangelho",
    subtitle: "A Boa Nova da Salvação",
    summary: "A graça de Deus que perdoa, reconcilia e dá vida eterna abundante.",
    fullText:
      "O Evangelho. Esta lição pretende ensinar ao catecúmeno o que é Evangelho, a graça de Deus e a salvação. A palavra Evangelho significa 'Boa Nova'. A Boa Nova é que Deus atuou decisivamente em Jesus Cristo para lidar com a nossa condição pecadora, isto é, Ele agiu para nos salvar. Deus oferece-nos o Seu amor, perdão, aceitação e nova vida em Cristo. Deus, o Pai, mandou Seu Filho para a salvação do mundo. Jesus disse: 'Eu vim para que tenham vida e a tenham em abundância. Porque o Filho do Homem veio para salvar o que se havia perdido'. Salvação é o perdão do nosso pecado, libertação da culpa e a dádiva de vida nova em Cristo. É um processo que começa agora, dá-nos vitória sobre a morte e é completado com Deus nos céus. Deus, como oferta gratuita, converte-nos pela Sua graça, fazendo-nos passar de rebeldes a amigos.",
    references: "João 10:10, Lucas 19:10, Atos 3:19, Atos 16:30-34",
    url: null,
    isAudioReady: true,
  },
  {
    id: "6",
    tapNumber: 6,
    partNumber: "6",
    label: "Parte 6",
    title: "O Espírito Santo",
    subtitle: "O Consolador e Santificador",
    summary: "O dom do Espírito Santo que purifica corações e guia a Igreja.",
    fullText:
      "O Espírito Santo. Nesta lição o catecúmeno fica a conhecer o Espírito Santo e as suas obras. Deus perdoa os nossos pecados, purifica os nossos corações e nos enche de Espírito Santo. O Espírito Santo torna-se nosso amigo e nos faz compreender que somos filhos de Deus, aconselhando-nos e fortalecendo-nos em casos de tentação e ajudando-nos a viver na santidade. O Espírito Santo obriga-nos a servir outras pessoas, a testemunhar de Cristo e a desenvolver o Seu reino.",
    references: "Atos 2:1-13, Joel 2:28, João 14:26",
    url: null,
    isAudioReady: true,
  },
  {
    id: "7",
    tapNumber: 7,
    partNumber: "7",
    label: "Parte 7",
    title: "O Cristão",
    subtitle: "Arrependimento, Fé e Discipulado",
    summary: "O que é ser cristão, arrependimento, conversão e caminhar com Cristo.",
    fullText:
      "O Cristão. Nesta lição ensina-se o catecúmeno a saber o que é um cristão, o que é o arrependimento e o que é a conversão. Cristãos são aqueles que: acreditam que Deus se revelou a Si próprio em Jesus Cristo; aceitam Jesus Cristo como seu Senhor e Salvador pessoal; vivem em comunhão com Deus e no poder do Espírito Santo; tomam o seu lugar na comunidade da Igreja de Cristo. Um cristão é chamado por Deus para confiar e seguir a Jesus Cristo, para se manter na Sua companhia, aprender com as Suas palavras e ações, e partilhar da Sua missão. Arrependimento é a mudança completa do caminho pecaminoso e decisão, pela fé, de receber Jesus Cristo como Senhor e Salvador pessoal. É a mudança completa e total do rumo da vida para seguir a vontade de Deus.",
    references: "Romanos 10:9-10, 2 Coríntios 5:17",
    url: null,
    isAudioReady: true,
  },
  {
    id: "8",
    tapNumber: 8,
    partNumber: "8",
    label: "Parte 8",
    title: "Vida Cristã",
    subtitle: "Amor, Santidade e a Regra Áurea",
    summary: "Viver no poder do Espírito Santo, amando a Deus e ao próximo.",
    fullText:
      "Vida Cristã. Nesta lição pretende-se que o catecúmeno aprenda os princípios da vida cristã e conheça o Reino de Deus e os Seus mandamentos. O catecúmeno deverá também conhecer a Regra Áurea. A vida nova é a vida no poder do Espírito Santo, vivida por aqueles que Deus fez herdeiros do Seu reino mediante a obra salvífica de Jesus. O Reino de Deus é o Seu governo legítimo sobre todas as coisas que Ele fez. Fazendo tudo por gratidão a Deus pelo Seu amor por nós revelado sobretudo em Jesus Cristo, nós cumprimos a vontade de Deus pelo poder do Espírito Santo. Deus guia-nos através da Bíblia, da fraternidade cristã e pela nossa consciência. Jesus resumiu os mandamentos na Regra Áurea: 'Amarás o Senhor teu Deus de todo o teu coração, e de toda a tua alma, e de todo o teu pensamento. Amarás o teu próximo como a ti mesmo'. Um novo mandamento vos dou: que vos ameis uns aos outros, como Eu vos amei.",
    references: "Romanos 8:1-14, Gálatas 5:22-23, João 13:34",
    url: null,
    isAudioReady: true,
  },
  {
    id: "9",
    tapNumber: 9,
    partNumber: "9",
    label: "Parte 9",
    title: "Os Dez Mandamentos da Lei de Deus",
    subtitle: "O Código de Conduta do Cristão",
    summary: "As tábuas da Lei entregues a Moisés com os preceitos de Deus.",
    fullText:
      "Os Dez Mandamentos da Lei de Deus. No fim desta lição o catecúmeno deverá saber qual é o código de conduta do cristão. Deverá também saber que o cristianismo implica relação vertical com Deus e relação transversal com o próximo. Os Dez Mandamentos foram originalmente escritos em tábuas de pedra sob a inspiração de Deus e entregues a Moisés (Êxodo 20:2-17, Deuteronómio 5:6-21). Prólogo: 'Eu sou o Senhor teu Deus, que te tirei da terra do Egipto, da casa de servidão'. 1. Não terás outros deuses diante de mim. 2. Não farás para ti imagem de escultura nem te curvarás a elas. 3. Não tomarás o nome do Senhor teu Deus em vão. 4. Lembra-te do dia de sábado para o santificar. 5. Honra teu pai e tua mãe. 6. Não matarás. 7. Não adulterarás. 8. Não furtarás. 9. Não dirás falso testemunho contra o teu próximo. 10. Não cobiçarás a casa do teu próximo, nem a mulher do teu próximo, nem coisa alguma que lhe pertença.",
    references: "Êxodo 20:2-17, Deuteronómio 5:6-21",
    url: null,
    isAudioReady: true,
  },
  {
    id: "10",
    tapNumber: 10,
    partNumber: "10",
    label: "Parte 10",
    title: "Adorar e Orar",
    subtitle: "Comunhão Diária e a Oração do Senhor",
    summary: "Adoração com louvor e oração segundo o modelo do Pai Nosso.",
    fullText:
      "Adorar e Orar. Nesta lição, pretende-se que o catecúmeno conheça os conceitos de adorar e orar, assim como a diferença entre eles. Adorar é elevar a nossa mente a Deus: cantando, orando, rendendo glória a Deus e lendo a Sua Palavra. Adoramos a Deus glorificando-O porque nos convencemos de que não podemos viver sem Ele. Orar é dar a conhecer a Deus o que o nosso coração deseja, segundo a Sua vontade. Orar é falar com Deus com a convicção de que Ele ouve. O próprio Jesus orava com frequência e ensinou a Oração do Senhor (Pai Nosso): 'Pai nosso que estás nos céus, santificado seja o Teu nome. Venha o Teu reino, seja feita a Tua vontade, assim na terra como no céu. O pão nosso de cada dia nos dá hoje. Perdoa-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores. E não nos deixes cair em tentação, mas livra-nos do mal; porque Teu é o reino, o poder e a glória para sempre. Ámen.'",
    references: "Mateus 6:5-13, Lucas 11:1-4",
    url: null,
    isAudioReady: true,
  },
  {
    id: "11",
    tapNumber: 11,
    partNumber: "11",
    label: "Parte 11",
    title: "Os Sacramentos",
    subtitle: "O Santo Batismo e a Santa Ceia",
    summary: "Os dois sacramentos bíblicos instituídos por Jesus como sinais de graça.",
    fullText:
      "Os Sacramentos. No final desta lição o catecúmeno deverá conhecer quais são os sacramentos, em que consistem, qual o seu significado e quem participa deles. Os sacramentos são meios de graça. São símbolos que nos foram dados por Jesus a fim de nos servirem de auxílio para recebermos a Sua graça e para a firmeza do desejo de purificação dos nossos corações. Os sacramentos são dois: o Batismo e a Ceia do Senhor (Santa Ceia). O Batismo aponta para a vida a ser vivida, proclama o perdão e purificação do pecado e a regeneração pelo Espírito Santo. A água simboliza o sangue purificador de Jesus e o novo nascimento. A Santa Ceia é a recordação da paixão e morte do Senhor. Ao comerem o pão e beberem o cálice, mediante o Espírito Santo, os crentes recebem Cristo pela fé com ações de graças.",
    references: "1 Coríntios 11:23-29, Mateus 28:19",
    url: null,
    isAudioReady: true,
  },
  {
    id: "12",
    tapNumber: 12,
    partNumber: "12",
    label: "Parte 12",
    title: "O Nosso Credo",
    subtitle: "O Credo Apostólico e a Confissão de Fé",
    summary: "As afirmações históricas da fé cristã e a doutrina trinitária.",
    fullText:
      "O Nosso Credo. O catecúmeno aprenderá as bases da fé cristã e o Credo Apostólico. O Credo de Niceia foi formulado em 325 AD e Constantinopla em 381 AD. O Credo Apostólico diz: 'Creio em Deus Todo-Poderoso, Criador do céu e da terra; e em Jesus Cristo, Seu Filho unigénito, nosso Senhor; o qual foi concebido por obra e graça do Espírito Santo, nasceu da Maria Virgem, padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e sepultado; ao terceiro dia ressuscitou dos mortos, subiu ao céu, está sentado à mão direita de Deus Pai Todo-Poderoso, de onde há de vir para julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Universal, na comunhão dos santos, na remissão dos pecados, na ressurreição do corpo e na vida eterna. Ámen.' Declaramos que cremos em Deus Triúno: Pai, Filho e Espírito Santo.",
    references: "Credo Apostólico, Credo Niceno, Credo Social Metodista",
    url: null,
    isAudioReady: true,
  },
  {
    id: "13",
    tapNumber: 13,
    partNumber: "13",
    label: "Parte 13",
    title: "Compromisso dos que vão ser Batizados",
    subtitle: "Profissão de Fé e Votos Batismais",
    summary: "Votos e compromissos sagrados assumidos perante Deus e a Igreja.",
    fullText:
      "Compromisso dos que vão ser batizados. Concluídos os estudos, você deve ser batizado na igreja para que se torne membro dela. Este é o compromisso: Estás arrependido dos teus pecados? Resposta: Sim, por obra e graça do Espírito Santo. Prometes renunciar a todo o pecado e guardar obedientemente os mandamentos de Deus? Resposta: Sim, prometo, ajudando-me o Senhor. Confessas aceitar Jesus Cristo como Senhor e teu Salvador pessoal? Prometes fidelidade ao Seu reino? Resposta: Sim, confesso e prometo. Queres ser batizado nesta fé, integrando-te na Igreja de Jesus Cristo? Resposta: Sim, é este o meu desejo. Prometes viver uma vida cristã e sempre permanecer membro fiel da Santa Igreja de Cristo? Resposta: Eu o farei com a ajuda do Senhor.",
    references: "Livro de Disciplina da Igreja Metodista Unida",
    url: null,
    isAudioReady: true,
  },
  {
    id: "14",
    tapNumber: 14,
    partNumber: "14",
    label: "Parte 14",
    title: "A Oração do Senhor",
    subtitle: "O Modelo Perfeito de Oração",
    summary: "Reflexão sobre cada petição da oração que Jesus nos ensinou.",
    fullText:
      "A Oração do Senhor. Jesus ensinou os Seus discípulos a orar com sinceridade e reverência. O Pai Nosso reúne a exaltação do Santo Nome de Deus, a busca pela vinda do Seu Reino, a confiança na Sua provisão diária, a súplica por perdão mútuo e a libertação de toda a tentação e mal. Ao orarmos, colocamos toda a nossa existência sob o senhorio amoroso de Deus Pai.",
    references: "Mateus 6:9-13, Lucas 11:2-4",
    url: null,
    isAudioReady: true,
  },
  {
    id: "15",
    tapNumber: 15,
    partNumber: "15",
    label: "Parte 15",
    title: "A Igreja e a Sua Missão",
    subtitle: "Corpo Vivo de Cristo no Mundo",
    summary: "O papel de testemunho, comunhão, serviço social e evangelização da Igreja.",
    fullText:
      "A Igreja e a Sua Missão. A Igreja é o povo chamado por Deus e unido pelo Espírito Santo para continuar a obra redentora de Jesus Cristo. Na tradição metodista de John Wesley, a missão da Igreja une piedade pessoal e santidade social: pregar o Evangelho, cuidar dos desfavorecidos, acolher a todos com amor incondicional e transformar o mundo pela justiça e paz de Deus.",
    references: "1 Coríntios 12:12-27, Efésios 4:11-16",
    url: null,
    isAudioReady: true,
  },
  {
    id: "16",
    tapNumber: 16,
    partNumber: "16",
    label: "Parte 16",
    title: "A Graça de Deus",
    subtitle: "Graça Preveniente, Justificadora e Santificadora",
    summary: "O coração da teologia wesleyana e o agir constante do amor divino.",
    fullText:
      "A Graça de Deus. Na teologia metodista, a graça é o amor imerecido e gratuito de Deus. A Graça Preveniente cerca-nos antes mesmo de O conhecermos, despertando a consciência. A Graça Justificadora perdoa os nossos pecados quando cremos em Cristo. A Graça Santificadora capacita-nos diariamente a crescer no amor perfeito a Deus e ao próximo ao longo de toda a vida.",
    references: "Efésios 2:8-9, Romanos 5:1-2, 1 Tessalonicenses 5:23",
    url: null,
    isAudioReady: true,
  },
  {
    id: "17",
    tapNumber: 17,
    partNumber: "17",
    label: "Parte 17",
    title: "Esperança e Vida Eterna",
    subtitle: "A Vitória Final em Cristo",
    summary: "A promessa da nova criação e a plenitude da comunhão com Deus nos céus.",
    fullText:
      "Esperança e Vida Eterna. A fé cristã é fundamentada na certeza viva da ressurreição. A morte física não tem a última palavra sobre os que estão em Cristo. Aguardamos com santa esperança os novos céus e a nova terra, onde não haverá mais pranto, dor ou morte, e onde viveremos na alegria plena e comunhão eterna com a Santíssima Trindade para todo o sempre. Ámen.",
    references: "Apocalipse 21:1-4, 1 Coríntios 15:51-57, João 14:1-3",
    url: null,
    isAudioReady: true,
  },
];

export const WELCOME_SPEECH_TEXT =
  "Bem-vindo ao Catecismo Júnior online da Igreja Metodista Unida. Esta é uma iniciativa de acessibilidade e inclusão para pessoas cegas, com baixa visão ou dificuldades de leitura. Vamos ouvir o Prefácio e o Prefácio à Edição Revista. Depois desta introdução, o áudio ficará em pausa. Poderá então tocar 1 vez no ecrã para a Parte 1 sobre Deus, 2 toques para a Parte 2 sobre O Homem, e assim sucessivamente até 17 toques para a Parte 17 sobre Esperança e Vida Eterna. Pode tocar 20 vezes para descarregar os ficheiros ou 21 vezes para ouvir estas instruções e prefácios novamente. Em nome do Pai, do Filho e do Espírito Santo. Ámen.";
