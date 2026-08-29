import prefacio from "@/assets/Catecismo_Junior_Parte_0_-_Prefacio.mp3.asset.json";
import prefacioRevista from "@/assets/Catecismo_Junior_Parte_0.1_-_Prefacio_A_Edicao_Revista.mp3.asset.json";
import capitulo1 from "@/assets/Catecismo_Junior_Parte_1_-_DEUS.mp3.asset.json";

export interface LessonTrack {
  id: string;
  tapNumber: number;
  partNumber: string;
  label: string;
  title: string;
  summary: string;
  fullText: string;
  references?: string;
  url: string | null;
  filename: string;
}

export const WELCOME_SPEECH_TEXT =
  'Bem-vindo ao Catecismo Júnior online da Igreja Metodista Unida. Esta é uma iniciativa de acessibilidade e inclusão. Por favor, não toque em nada de momento para ouvir o Prefácio e o Prefácio à Edição Revista. Pode tocar no ecrã para mudar de capítulo de acordo com o número de toques e também pode tocar no ecrã 20 vezes para descarregar os ficheiros. Quando descarregar os ficheiros, pode usar a Siri ou o Google Assistant e dizer: "Hey Siri, abre o Catecismo Júnior parte 1 a 16" para os capítulos. Se gostaria de ouvir novamente, toque no ecrã 21 vezes. Se descarregar os ficheiros, eles estão rotulados como Catecismo Júnior parte 0 para o Prefácio e Catecismo Júnior parte 0.1 para o Prefácio à Edição Revista. Em nome do Pai, do Filho e do Espírito Santo. Ámen.';

export const PREFACES: LessonTrack[] = [
  {
    id: "0",
    tapNumber: 0,
    partNumber: "0",
    label: "Parte 0",
    title: "Prefácio",
    summary: "Introdução doutrinária do Catecismo da Igreja Metodista Unida.",
    fullText:
      "Prefácio. Catecismo é o ensino das doutrinas cristãs ou o livro que reúne, formula e explica o conjunto dos elementos essenciais da fé cristã. A palavra catecismo é de origem grega e podemos encontrá-la no texto do Novo Testamento, no Evangelho de Lucas 1:4, na Carta aos Romanos 2:18 e em 1 Coríntios 14:19, referida ao ensino de doutrinas. A preocupação com o ensino vem desde os primeiros tempos da igreja. A partir do século XVI surgem catecismos da Igreja Católica Romana, da Igreja Ortodoxa e das Igrejas Protestantes. Pretende-se com este documento apresentar uma declaração tão clara quanto possível da fé cristã. Espera-se que este seja um instrumento de base para a preparação de novos membros da igreja, podendo ser utilizado por jovens, adultos ou grupos de estudo para um mais profundo e renovado conhecimento sobre a fé.",
    url: prefacio.url,
    filename: "Catecismo_Junior_Parte_0_-_Prefacio.mp3",
  },
  {
    id: "0.1",
    tapNumber: 0,
    partNumber: "0.1",
    label: "Parte 0.1",
    title: "Prefácio à Edição Revista",
    summary: "Revisão e atualização da linguagem e inclusão metodista.",
    fullText:
      "Prefácio à Edição Revista. Dando seguimento ao trabalho iniciado pela Subcomissão Distrital de Educação de Maputo Leste, a Direção de Educação da Igreja Metodista Unida procedeu à revisão do Catecismo do Povo Chamado Metodista. A revisão consistiu, para além da mudança do título da obra, na adaptação dos conteúdos à forma de lições, com sumários e questionários sobre os conteúdos ministrados. Desta forma, pretende-se facilitar o trabalho do catequista na facilitação e explanação dos vários temas, assim como na avaliação do conhecimento dos catecúmenos. Em alguns casos foi alterada a sequência dos capítulos, de forma a tornar o seu ensino mais progressivo. Foram também feitas alterações no conteúdo referente à Igreja Metodista Unida, de forma a torná-lo atual, em consonância com a evolução histórica ocorrida desde a publicação da primeira edição. Que o Dono da obra abençoe este instrumento que dedicamos para a grande missão da Igreja Metodista Unida de fazer discípulos de Jesus Cristo para a transformação do mundo.",
    url: prefacioRevista.url,
    filename: "Catecismo_Junior_Parte_0.1_-_Prefacio_A_Edicao_Revista.mp3",
  },
];

export const CATECHISM_LESSONS: LessonTrack[] = [
  {
    id: "1",
    tapNumber: 1,
    partNumber: "1",
    label: "Parte 1",
    title: "Deus",
    summary: "Deus Criador, Pai Eterno, justo e bom.",
    fullText:
      "Deus. No fim desta lição o catecúmeno deverá saber quem é Deus, quais são as Suas características e qual é a relação existente entre Deus e o homem. Deus é o criador do universo e Pai de todos nós. Deus nos criou para povoar o universo, por isso somos filhos de Deus, e como todos nós somos filhos do mesmo Pai, nós todos somos irmãos. Deus é perfeito e enche completamente o universo. Nós estamos em Deus e Ele em nós. Deus não se mostra, mas se revela pelas Suas obras. Podemos adorá-Lo em qualquer lugar: nas cidades ou nos desertos, nos mares ou nas florestas, nos palácios ou nas cabanas. Sendo Deus um Espírito, é pelo pensamento que devemos adorá-Lo. Deus governa o universo por meio de Suas sábias e imutáveis leis. Deus é eterno, não teve princípio e não terá fim. Deus é único, há um só Deus. Deus é bom, ama todas as Suas criaturas com o mesmo amor. Deus é justo, todos somos iguais diante de Deus.",
    references: "Salmo 23, Salmo 121, Mateus 6:25-34",
    url: capitulo1.url,
    filename: "Catecismo_Junior_Parte_1_-_DEUS.mp3",
  },
  {
    id: "2",
    tapNumber: 2,
    partNumber: "2",
    label: "Parte 2",
    title: "O Homem",
    summary: "O homem como criatura de Deus, corpo material e alma imortal.",
    fullText:
      "O Homem. Nesta lição pretende-se que o catecúmeno conheça as principais características do ser humano como criatura de Deus, suas diferenças e semelhanças com outras criaturas do reino animal. No último dia da criação, disse Deus: 'Façamos o homem à nossa imagem, conforme a nossa semelhança' (Génesis 1:26). Então Ele terminou Seu trabalho com um toque pessoal: Deus formou o homem do pó e deu-lhe vida, compartilhando do Seu próprio fôlego (Génesis 2:7). Desta forma, o homem é o único dentre toda a criação de Deus que tem uma parte material, o corpo, e outra imaterial, alma e espírito. A imagem de Deus refere-se à parte imaterial do homem; ela separa o homem do mundo animal, dá-lhe domínio sobre os outros animais e capacita-o a ter comunhão com seu Criador. É uma semelhança mental, moral e social. O homem tem a capacidade de raciocinar, falar e distinguir entre o bem e o mal. A consciência é a voz que ouvimos no nosso íntimo, que nos aconselha a praticar o bem e nos censura quando praticamos o mal. A consciência foi-nos dada por Deus. A parte imaterial do homem, a alma, não acaba com a morte do corpo e vive eternamente. O dever de todo o homem é obedecer à vontade de nosso Pai celestial.",
    references: "Salmo 8, Romanos 8:14, Génesis 1:26-28",
    url: null,
    filename: "Catecismo_Junior_Parte_2_-_O_Homem.mp3",
  },
  {
    id: "3",
    tapNumber: 3,
    partNumber: "3",
    label: "Parte 3",
    title: "O Pecado",
    summary: "O pecado como alheamento de Deus e corrupção das relações humanas.",
    fullText:
      "O Pecado. Ao fim desta lição o catecúmeno deverá saber o que é pecado, quais são as suas consequências e efeitos, e quem peca. Pecado é a condição de alheamento de Deus que afeta toda a humanidade. Pecados são ações, palavras e pensamentos específicos que derivam da nossa condição pecadora e que negam a presença, o poder e o propósito de Deus. O pecado impede o efeito da graça divina, corrompe as nossas relações com Ele e uns com os outros, com o mundo onde vivemos e connosco próprios. O efeito do pecado é discórdia, onde Deus pretendia harmonia. O resultado primário do pecado é a escravidão, é muito mais que simples transgressão. O pecado é um atentado perigoso contra o ambiente vital: não polui somente a nós, mas todos os aspetos da nossa existência, todas as estruturas da vida humana e da sociedade no seu todo. Todas as pessoas pecam. O salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus.",
    references: "Marcos 7:21-23, Romanos 6:23, Tiago 4:1-3, 1 João 1:8, Romanos 3:23, Salmo 51",
    url: null,
    filename: "Catecismo_Junior_Parte_3_-_O_Pecado.mp3",
  },
  {
    id: "4",
    tapNumber: 4,
    partNumber: "4",
    label: "Parte 4",
    title: "Jesus Cristo",
    summary: "O Salvador do mundo, Sua morte na cruz e ressurreição triunfal.",
    fullText:
      "Jesus Cristo. O catecúmeno deverá ao fim desta lição conhecer Jesus Cristo e a sua missão na Terra, bem como a Sua morte e ressurreição. A palavra Cristo vem do grego Christos, que significa Ungido, comparada ao termo hebraico Messias. Jesus é o Cristo porque n'Ele toda a plenitude de Deus habita, e através d'Ele Deus reconciliou todas as coisas (Colossenses 1:19-20). A missão de Cristo foi proclamar a boa nova do Reino de Deus, chamar as pessoas para viver neste reino mediante o arrependimento dos pecados para entrar numa vida obediente à Sua vontade. Jesus morreu numa humilhante e cruel cruz de madeira, porém Deus ressuscitou-O dos mortos! Ele venceu a morte e abriu o acesso ao Reino de Deus. Jesus deu a Grande Comissão: 'É-me dado todo o poder no céu e na terra. Portanto ide, ensinai todas as nações, batizando-as em nome do Pai, do Filho e do Espírito Santo'.",
    references: "Colossenses 1:19-20, Mateus 28:19-20, Lucas 24",
    url: null,
    filename: "Catecismo_Junior_Parte_4_-_Jesus_Cristo.mp3",
  },
  {
    id: "5",
    tapNumber: 5,
    partNumber: "5",
    label: "Parte 5",
    title: "O Evangelho",
    summary: "A Boa Nova da salvação e graça em Jesus Cristo.",
    fullText:
      "O Evangelho. Esta lição pretende ensinar ao catecúmeno o que é Evangelho, a graça de Deus e a salvação. A palavra Evangelho significa Boa Nova. A Boa Nova é que Deus atuou decisivamente em Jesus Cristo para lidar com a nossa condição pecadora, isto é, Ele agiu para nos salvar. Deus oferece-nos o Seu amor, perdão, aceitação e nova vida em Cristo. Jesus disse: 'Eu vim para que tenham vida e a tenham em abundância. Porque o Filho do Homem veio para salvar o que se havia perdido'. Salvação é o perdão do nosso pecado, libertação da culpa e a dádiva de vida nova em Cristo. É um processo que começa agora, dá-nos vitória sobre a morte e é completado com Deus nos céus.",
    references: "João 10:10, Lucas 19:10, Atos 3:19, Atos 16:30-34",
    url: null,
    filename: "Catecismo_Junior_Parte_5_-_O_Evangelho.mp3",
  },
  {
    id: "6",
    tapNumber: 6,
    partNumber: "6",
    label: "Parte 6",
    title: "O Espírito Santo",
    summary: "O Consolador, amizade com Deus e poder para testemunhar.",
    fullText:
      "O Espírito Santo. Nesta lição o catecúmeno fica a conhecer o Espírito Santo e as suas obras. Deus perdoa os nossos pecados, purifica os nossos corações e nos enche de Espírito Santo. O Espírito Santo torna-se nosso amigo e nos faz compreender que somos filhos de Deus, aconselhando-nos e fortalecendo-nos em casos de tentação e ajudando-nos a viver na santidade. O Espírito Santo obriga-nos a servir outras pessoas, a testemunhar de Cristo e a desenvolver o Seu reino.",
    references: "Atos 2:1-13, Joel 2:28, João 14:26",
    url: null,
    filename: "Catecismo_Junior_Parte_6_-_O_Espirito_Santo.mp3",
  },
  {
    id: "7",
    tapNumber: 7,
    partNumber: "7",
    label: "Parte 7",
    title: "O Cristão",
    summary: "O discipulado cristão, a conversão e o seguimento a Cristo.",
    fullText:
      "O Cristão. Nesta lição ensina-se o catecúmeno a saber o que é um cristão, o que é o arrependimento e o que é a conversão. Cristãos são aqueles que: acreditam que Deus se revelou a Si próprio em Jesus Cristo; aceitam Jesus Cristo como seu Senhor e Salvador pessoal; vivem em comunhão com Deus e no poder do Espírito Santo; tomam o seu lugar na comunidade da Igreja de Cristo. Um cristão é chamado por Deus para confiar e seguir a Jesus Cristo, para se manter na Sua companhia, aprender com as Suas palavras e ações, e partilhar da Sua missão. Arrependimento é a mudança completa do caminho pecaminoso e decisão, pela fé, de receber Jesus Cristo como Senhor e Salvador pessoal.",
    references: "Romanos 10:9-10, 2 Coríntios 5:17",
    url: null,
    filename: "Catecismo_Junior_Parte_7_-_O_Cristao.mp3",
  },
  {
    id: "8",
    tapNumber: 8,
    partNumber: "8",
    label: "Parte 8",
    title: "Vida Cristã",
    summary: "Os princípios do Reino de Deus e a Regra Áurea do amor.",
    fullText:
      "Vida Cristã. Nesta lição pretende-se que o catecúmeno aprenda os princípios da vida cristã e conheça o Reino de Deus e os Seus mandamentos. A vida nova é a vida no poder do Espírito Santo, vivida por aqueles que Deus fez herdeiros do Seu reino mediante a obra salvífica de Jesus. Fazendo tudo por gratidão a Deus pelo Seu amor revelado sobretudo em Jesus Cristo, nós cumprimos a vontade de Deus. Jesus resumiu os mandamentos na Regra Áurea: 'Amarás o Senhor teu Deus de todo o teu coração, e de toda a tua alma, e de todo o teu pensamento. Amarás o teu próximo como a ti mesmo'. Um novo mandamento vos dou: que vos ameis uns aos outros, como Eu vos amei.",
    references: "Romanos 8:1-14, Gálatas 5:22-23, João 13:34",
    url: null,
    filename: "Catecismo_Junior_Parte_8_-_Vida_Crista.mp3",
  },
  {
    id: "9",
    tapNumber: 9,
    partNumber: "9",
    label: "Parte 9",
    title: "Os Dez Mandamentos da Lei de Deus",
    summary: "As tábuas da Lei entregues a Moisés com o código de conduta divino.",
    fullText:
      "Os Dez Mandamentos da Lei de Deus. No fim desta lição o catecúmeno deverá saber qual é o código de conduta do cristão. Os Dez Mandamentos foram originalmente escritos em tábuas de pedra sob a inspiração de Deus e entregues a Moisés (Êxodo 20:2-17, Deuteronómio 5:6-21). Prólogo: 'Eu sou o Senhor teu Deus, que te tirei da terra do Egipto, da casa de servidão'. 1. Não terás outros deuses diante de mim. 2. Não farás para ti imagem de escultura nem te curvarás a elas. 3. Não tomarás o nome do Senhor teu Deus em vão. 4. Lembra-te do dia de sábado para o santificar. 5. Honra teu pai e tua mãe. 6. Não matarás. 7. Não adulterarás. 8. Não furtarás. 9. Não dirás falso testemunho contra o teu próximo. 10. Não cobiçarás a casa do teu próximo, nem a mulher do teu próximo, nem coisa alguma que lhe pertença.",
    references: "Êxodo 20:2-17, Deuteronómio 5:6-21",
    url: null,
    filename: "Catecismo_Junior_Parte_9_-_Os_Dez_Mandamentos_Da_Lei_De_Deus.mp3",
  },
  {
    id: "10",
    tapNumber: 10,
    partNumber: "10",
    label: "Parte 10",
    title: "Adorar e Orar",
    summary: "A essência do louvor cristão e a Oração do Pai Nosso.",
    fullText:
      "Adorar e Orar. Nesta lição, pretende-se que o catecúmeno conheça os conceitos de adorar e orar, assim como a diferença entre eles. Adorar é elevar a nossa mente a Deus: cantando, orando, rendendo glória a Deus e lendo a Sua Palavra. Adoramos a Deus glorificando-O porque nos convencemos de que não podemos viver sem Ele. Orar é dar a conhecer a Deus o que o nosso coração deseja, segundo a Sua vontade. Orar é falar com Deus com a convicção de que Ele ouve. O próprio Jesus orava com frequência e ensinou a Oração do Senhor: 'Pai nosso que estás nos céus, santificado seja o Teu nome. Venha o Teu reino, seja feita a Tua vontade, assim na terra como no céu. O pão nosso de cada dia nos dá hoje. Perdoa-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores. E não nos deixes cair em tentação, mas livra-nos do mal; porque Teu é o reino, o poder e a glória para sempre. Ámen.'",
    references: "Mateus 6:5-13, Lucas 11:1-4",
    url: null,
    filename: "Catecismo_Junior_Parte_10_-_Adorar_E_Orar.mp3",
  },
  {
    id: "11",
    tapNumber: 11,
    partNumber: "11",
    label: "Parte 11",
    title: "Os Sacramentos",
    summary: "O Santo Batismo e a Santa Ceia do Senhor como meios de graça.",
    fullText:
      "Os Sacramentos. No final desta lição o catecúmeno deverá conhecer quais são os sacramentos, em que consistem, qual o seu significado e quem participa deles. Os sacramentos são meios de graça. São símbolos que nos foram dados por Jesus a fim de nos servirem de auxílio para recebermos a Sua graça e para a firmeza do desejo de purificação dos nossos corações. Os sacramentos são dois: o Batismo e a Ceia do Senhor, a Santa Ceia. O Batismo aponta para a vida a ser vivida, proclama o perdão e purificação do pecado e a regeneração pelo Espírito Santo. A água simboliza o sangue purificador de Jesus e o novo nascimento. A Santa Ceia é a recordação da paixão e morte do Senhor. Ao comerem o pão e beberem o vinho, mediante o poder do Espírito Santo, os crentes recebem Cristo pela fé com ações de graças.",
    references: "1 Coríntios 11:23-29, Mateus 28:19",
    url: null,
    filename: "Catecismo_Junior_Parte_11_-_Os_Sacramentos.mp3",
  },
  {
    id: "12",
    tapNumber: 12,
    partNumber: "12",
    label: "Parte 12",
    title: "O Nosso Credo",
    summary: "O Credo Apostólico e a confissão de fé trinitária.",
    fullText:
      "O Nosso Credo. O catecúmeno aprenderá as bases da fé cristã e o Credo Apostólico. O Credo Apostólico diz: 'Creio em Deus Pai Todo-Poderoso, Criador do céu e da terra; e em Jesus Cristo, Seu Filho unigénito, nosso Senhor; o qual foi concebido por obra e graça do Espírito Santo, nasceu da Maria Virgem, padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e sepultado; ao terceiro dia ressuscitou dos mortos, subiu ao céu, está sentado à mão direita de Deus Pai Todo-Poderoso, de onde há de vir para julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Universal, na comunhão dos santos, na remissão dos pecados, na ressurreição do corpo e na vida eterna. Ámen.' Declaramos que cremos em Deus Triúno: Pai, Filho e Espírito Santo.",
    references: "Credo Apostólico, Credo Niceno, Credo Social Metodista",
    url: null,
    filename: "Catecismo_Junior_Parte_12_-_O_Nosso_Credo.mp3",
  },
  {
    id: "13",
    tapNumber: 13,
    partNumber: "13",
    label: "Parte 13",
    title: "Compromisso dos que vão ser Batizados",
    summary: "Os votos sagrados de profissão de fé e admissão na Igreja.",
    fullText:
      "Compromisso dos que vão ser batizados. Concluídos os estudos, você deve ser batizado na igreja para que se torne membro dela. Este é o compromisso: Estás arrependido dos teus pecados? Resposta: Sim, por obra e graça do Espírito Santo. Prometes renunciar a todo o pecado e guardar obedientemente os mandamentos de Deus? Resposta: Sim, prometo, ajudando-me o Senhor. Confessas aceitar Jesus Cristo como Senhor e teu Salvador pessoal? Prometes fidelidade ao Seu reino? Resposta: Sim, confesso e prometo. Queres ser batizado nesta fé, integrando-te na Igreja de Jesus Cristo? Resposta: Sim, é este o meu desejo. Prometes viver uma vida cristã e sempre permanecer membro fiel da Santa Igreja de Cristo? Resposta: Eu o farei com a ajuda do Senhor.",
    references: "Livro de Disciplina da Igreja Metodista Unida",
    url: null,
    filename: "Catecismo_Junior_Parte_13_-_Compromisso_Dos_Que_Vao_Ser_Batizados.mp3",
  },
  {
    id: "14",
    tapNumber: 14,
    partNumber: "14",
    label: "Parte 14",
    title: "A Oração do Senhor",
    summary: "A Oração Dominical e suas petições sagradas.",
    fullText:
      "A Oração do Senhor. Jesus ensinou os Seus discípulos a orar com sinceridade e reverência. O Pai Nosso reúne a exaltação do Santo Nome de Deus, a busca pela vinda do Seu Reino, a confiança na Sua provisão diária, a súplica por perdão mútuo e a libertação de toda a tentação e mal. Ao orarmos, colocamos toda a nossa existência sob o senhorio amoroso de Deus Pai.",
    references: "Mateus 6:9-13, Lucas 11:2-4",
    url: null,
    filename: "Catecismo_Junior_Parte_14_-_A_Oracao_Do_Senhor.mp3",
  },
  {
    id: "15",
    tapNumber: 15,
    partNumber: "15",
    label: "Parte 15",
    title: "A Igreja e a Sua Missão",
    summary: "O Corpo de Cristo na Terra e o testemunho wesleyano.",
    fullText:
      "A Igreja e a Sua Missão. A Igreja é o povo chamado por Deus e unido pelo Espírito Santo para continuar a obra redentora de Jesus Cristo. Na tradição metodista de John Wesley, a missão da Igreja une piedade pessoal e santidade social: pregar o Evangelho, cuidar dos desfavorecidos, acolher a todos com amor incondicional e transformar o mundo pela justiça e paz de Deus.",
    references: "1 Coríntios 12:12-27, Efésios 4:11-16",
    url: null,
    filename: "Catecismo_Junior_Parte_15_-_A_Igreja_E_A_Sua_Missao.mp3",
  },
  {
    id: "16",
    tapNumber: 16,
    partNumber: "16",
    label: "Parte 16",
    title: "A Graça de Deus",
    summary: "Graça Preveniente, Justificadora e Santificadora.",
    fullText:
      "A Graça de Deus. Na teologia metodista, a graça é o amor imerecido e gratuito de Deus. A Graça Preveniente cerca-nos antes mesmo de O conhecermos, despertando a consciência. A Graça Justificadora perdoa os nossos pecados quando cremos em Cristo. A Graça Santificadora capacita-nos diariamente a crescer no amor perfeito a Deus e ao próximo ao longo de toda a vida.",
    references: "Efésios 2:8-9, Romanos 5:1-2, 1 Tessalonicenses 5:23",
    url: null,
    filename: "Catecismo_Junior_Parte_16_-_A_Graca_De_Deus.mp3",
  },
];
