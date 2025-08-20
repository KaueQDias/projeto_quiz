Projeto: Quiz de jogos
📄 Descrição
Desenvolvi esta aplicação web como um quiz simples sobre jogos digitais. Neste projeto, utilizei as linguagens fundamentais do desenvolvimento web: JavaScript para criar toda a lógica interativa do quiz, HTML para a estruturação do conteúdo e CSS para a estilização visual, construindo uma interface limpa e funcional. O usuário pode iniciar o quiz, responder a um conjunto de perguntas e ver sua pontuação final.

✨ Tecnologias utilizadas

JavaScript (ES6+)

HTML5

CSS3

🚀 O que aprendi com este projeto

 Analisando o meu projeto "Quiz de Programação", que desenvolvi sozinho usando apenas HTML, CSS e JavaScript puro, posso destacar 5 aprendizados fundamentais que tive durante a criação:

Manipulação Direta do DOM: Aprendi a selecionar e modificar elementos HTML diretamente com JavaScript. Por exemplo, quando o usuário clica em "Iniciar", eu uso document.querySelector() para esconder a tela de boas-vindas (#welcome) e exibir a div das perguntas (#quiz), alterando suas classes ou estilos de display. Isso foi a base para criar a sensação de "múltiplas telas" em uma única página.

Criação Dinâmica de Elementos: Em vez de escrever todas as perguntas e respostas no HTML, aprendi a criar esses elementos dinamicamente. Eu guardei as perguntas em um array de objetos no JavaScript e, para cada pergunta, usei document.createElement() para criar os botões de resposta, definindo o texto e os atributos de cada um antes de adicioná-los à página. Isso tornou o código muito mais limpo e escalável.

Gerenciamento de Estado com Variáveis: Sem um framework, precisei controlar o "estado" do quiz manualmente. Criei variáveis para armazenar a pergunta atual (currentQuestionIndex) e a pontuação (score). A cada resposta, eu atualizava essas variáveis e usava seus valores para decidir qual pergunta mostrar em seguida ou quando exibir a tela de "Fim de Jogo".

Delegação de Eventos (Event Delegation): Em vez de adicionar um addEventListener para cada botão de resposta (o que seria ineficiente), adicionei um único "ouvinte" ao container que envolve os botões. Aprendi a usar o objeto event para identificar qual botão específico foi clicado (event.target). Isso melhorou a performance e simplificou o código de validação da resposta.

Uso de Animações e Transições em CSS: Para deixar a interface mais fluida, apliquei transições de CSS. Quando um botão é pressionado e a resposta é validada (correta ou incorreta), adicionei classes dinamicamente via JavaScript. O CSS, por sua vez, já tinha regras de transition e transform associadas a essas classes para criar o efeito de cor e a sutil animação de feedback visual, me ensinando como o JS e o CSS podem trabalhar juntos para melhorar a experiência do usuário.
