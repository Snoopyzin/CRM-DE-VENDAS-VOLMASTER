# 🚗 VOLMASTER - Plataforma de Gestão de Oficina

## 📋 Sobre o Projeto

Plataforma completa de gestão para oficinas automotivas, desenvolvida com foco na experiência do usuário e eficiência operacional. Mantém a identidade visual da marca Volmaster com design moderno e responsivo.

## ✨ Funcionalidades

### 📊 Dashboard
- Visão geral de métricas importantes
- Estatísticas em tempo real
- Gráficos de faturamento
- Serviços mais realizados
- Ordens de serviço recentes

### 👥 Gestão de Clientes
- Cadastro completo de clientes
- Listagem com busca e filtros
- Histórico de serviços
- Controle de veículos por cliente

### 🚚 Gestão de Veículos
- Cadastro de veículos (Volvo, Scania, etc)
- Ficha técnica completa
- Histórico de manutenções
- Status de manutenção

### 📝 Ordens de Serviço
- Criação de novas OS
- Controle de status (Em Andamento, Concluída, Aguardando Peças)
- Acompanhamento de prazos
- Vinculação com clientes e veículos

### 📦 Controle de Estoque
- Cadastro de peças
- Controle de quantidade
- Alertas de estoque baixo
- Valor total do estoque

### 💰 Gestão Financeira
- Controle de receitas e despesas
- Lançamentos financeiros
- Saldo mensal
- Histórico de transações

### 📈 Relatórios
- Relatório de faturamento
- Relatório de clientes
- Relatório de serviços
- Relatório de estoque

### ⚙️ Configurações
- Dados da oficina
- Configurações de notificações
- Personalização do sistema

## 🎨 Design

### Cores Principais
- **Amarelo Volmaster**: `#FDB915` - Cor principal da marca
- **Fundo Escuro**: `#0a0a0a` - Background principal
- **Cards**: `#1a1a1a` - Background dos cards
- **Sidebar**: `#111111` - Background da sidebar

### Tipografia
- **Fonte Principal**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com Grid e Flexbox
- **JavaScript**: Interatividade e funcionalidades
- **Bootstrap 5.3**: Framework CSS
- **Font Awesome 6.4**: Ícones
- **Chart.js**: Gráficos e visualizações

## 📱 Responsividade

A plataforma é totalmente responsiva e funciona perfeitamente em:
- 💻 Desktop (1920px+)
- 💻 Laptop (1024px - 1920px)
- 📱 Tablet (768px - 1024px)
- 📱 Mobile (< 768px)

## 🚀 Como Usar

### Abertura do Projeto
1. Abra o arquivo `index.html` em um navegador moderno
2. A plataforma carregará automaticamente

### Navegação
- Use o menu lateral para navegar entre as páginas
- No mobile, toque no ícone de menu para abrir a sidebar
- Clique em qualquer item do menu para acessar a funcionalidade

### Funcionalidades Principais

#### Dashboard
- Visualize métricas em tempo real
- Analise gráficos de faturamento
- Acompanhe ordens de serviço recentes

#### Adicionar Novo Item
- Clique no botão "+ Novo [Item]" em qualquer página
- Preencha os dados necessários
- Salve para adicionar ao sistema

#### Busca e Filtros
- Use a barra de busca para encontrar itens específicos
- Aplique filtros para refinar resultados
- Ordene colunas de tabelas

## 📂 Estrutura de Arquivos

```
site serviços volmaster/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos da plataforma
├── js/
│   └── script.js      # JavaScript principal
├── imagens/
│   └── logo volmaster branco.jpg  # Logo da marca
└── README.md          # Este arquivo
```

## 🔧 Personalização

### Alterar Cores
Edite as variáveis CSS no arquivo `css/style.css`:

```css
:root {
    --primary-yellow: #FDB915;    /* Cor principal */
    --dark-bg: #0a0a0a;           /* Fundo escuro */
    --card-bg: #1a1a1a;           /* Cards */
    /* ... */
}
```

### Adicionar Novas Páginas
1. Adicione o item no menu da sidebar (HTML)
2. Crie a section com `page-content` e ID único
3. Adicione o caso no switch da navegação (JS)

## 🌟 Recursos Futuros

- [ ] Sistema de autenticação completo
- [ ] Integração com API backend
- [ ] Impressão de ordens de serviço
- [ ] Envio de notificações por email/SMS
- [ ] Backup automático de dados
- [ ] Modo escuro/claro customizável
- [ ] Aplicativo mobile nativo
- [ ] Integração com WhatsApp Business

## 📝 Notas de Desenvolvimento

### LocalStorage
O sistema utiliza LocalStorage para armazenamento temporário de dados. Para produção, recomenda-se implementar um backend com banco de dados.

### Validações
- CPF e CNPJ: Validação completa com dígitos verificadores
- Email: Validação de formato
- Telefone: Aceita formatos brasileiros (10-11 dígitos)

### Máscaras
Máscaras automáticas disponíveis para:
- CPF: `000.000.000-00`
- CNPJ: `00.000.000/0000-00`
- Telefone: `(00) 00000-0000`
- CEP: `00000-000`
- Moeda: `R$ 0.000,00`

## 🐛 Solução de Problemas

### Gráficos não aparecem
- Verifique se Chart.js está carregado
- Verifique o console do navegador por erros

### Sidebar não abre no mobile
- Limpe o cache do navegador
- Verifique se o JavaScript está carregado

### Estilos não aplicados
- Verifique o caminho do arquivo CSS
- Limpe o cache do navegador
- Force refresh (Ctrl + F5)

## 👨‍💻 Suporte

Para suporte técnico ou dúvidas:
- 📞 Telefone: (62) 3290-0519
- 📱 WhatsApp: (62) 98765-4321
- 📧 Email: contato@volmaster.com.br

## 📄 Licença

© 2026 Volmaster. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para otimizar a gestão de oficinas automotivas especializadas em Volvo e Scania.**
