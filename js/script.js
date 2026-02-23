// ===================================
// VOLMASTER - Plataforma de Gestão
// JavaScript Principal
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSidebar();
    initCharts();
    initTableSearch();
    initFilterButtons();
});

// ===================================
// Navegação entre Páginas
// ===================================
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page-content');
    const pageTitle = document.getElementById('pageTitle');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover classe active de todos os itens
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Adicionar classe active ao item clicado
            this.classList.add('active');
            
            // Obter o nome da página
            const pageName = this.getAttribute('data-page');
            
            // Ocultar todas as páginas
            pages.forEach(page => page.classList.remove('active'));
            
            // Mostrar a página selecionada
            const targetPage = document.getElementById(`page-${pageName}`);
            if (targetPage) {
                targetPage.classList.add('active');
            }
            
            // Atualizar título da página
            const pageNames = {
                'dashboard': 'Dashboard',
                'clientes': 'Clientes',
                'veiculos': 'Veículos',
                'ordens': 'Ordens de Serviço',
                'estoque': 'Estoque',
                'financeiro': 'Financeiro',
                'relatorios': 'Relatórios',
                'configuracoes': 'Configurações'
            };
            
            if (pageTitle && pageNames[pageName]) {
                pageTitle.textContent = pageNames[pageName];
            }
            
            // Fechar sidebar no mobile
            if (window.innerWidth <= 768) {
                const sidebar = document.getElementById('sidebar');
                if (sidebar) {
                    sidebar.classList.remove('active');
                }
            }
        });
    });
}

// ===================================
// Controle da Sidebar
// ===================================
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileOverlay = document.getElementById('mobileOverlay');
    
    // Função para abrir sidebar (mobile)
    function openSidebar() {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('active');
            if (mobileOverlay) {
                mobileOverlay.classList.add('active');
            }
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Função para fechar sidebar (mobile)
    function closeSidebar() {
        sidebar.classList.remove('active');
        if (mobileOverlay) {
            mobileOverlay.classList.remove('active');
        }
        document.body.style.overflow = '';
    }
    
    // Toggle desktop
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            if (window.innerWidth > 768) {
                sidebar.classList.toggle('collapsed');
            } else {
                closeSidebar();
            }
        });
    }
    
    // Toggle mobile
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            if (sidebar.classList.contains('active')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
    }
    
    // Fechar ao clicar no overlay
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function() {
            closeSidebar();
        });
    }
    
    // Fechar sidebar ao clicar fora (mobile) - Método alternativo
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && 
                !mobileMenuToggle.contains(e.target) && 
                sidebar.classList.contains('active')) {
                closeSidebar();
            }
        }
    });
    
    // Fechar sidebar ao navegar (mobile)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });
    
    // Listener para redimensionamento
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeSidebar();
            sidebar.classList.remove('active');
        }
    });
    
    // Suporte a gestos de swipe para fechar
    let touchStartX = 0;
    let touchEndX = 0;
    
    sidebar.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    sidebar.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        if (touchStartX - touchEndX > 50) {
            // Swipe left - fechar sidebar
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        }
    }
    
    // Logout button
    const btnLogout = document.querySelector('.btn-logout');
    if (btnLogout) {
        btnLogout.addEventListener('click', function() {
            if (confirm('Deseja realmente sair do sistema?')) {
                // Aqui você implementaria a lógica de logout
                alert('Logout realizado com sucesso!');
                // window.location.href = 'login.html';
            }
        });
    }
}

// ===================================
// Inicializar Charts
// ===================================
function initCharts() {
    // Revenue Chart
    const revenueChart = document.getElementById('revenueChart');
    if (revenueChart && typeof Chart !== 'undefined') {
        const ctx = revenueChart.getContext('2d');
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [{
                    label: 'Faturamento',
                    data: [45000, 52000, 48000, 65000, 58000, 72000, 68000, 75000, 82000, 78000, 85000, 89750],
                    borderColor: '#FDB915',
                    backgroundColor: 'rgba(253, 185, 21, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#FDB915',
                    pointBorderColor: '#FDB915',
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: '#FDB915',
                    pointRadius: 4,
                    pointHitRadius: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#1a1a1a',
                        titleColor: '#ffffff',
                        bodyColor: '#a0a0a0',
                        borderColor: '#2a2a2a',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return 'R$ ' + context.parsed.y.toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                });
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#2a2a2a',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#a0a0a0',
                            callback: function(value) {
                                return 'R$ ' + (value / 1000) + 'k';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            color: '#a0a0a0'
                        }
                    }
                }
            }
        });
    }
}

// ===================================
// Busca em Tabelas
// ===================================
function initTableSearch() {
    const searchInputs = document.querySelectorAll('.search-box input');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const table = this.closest('.page-content').querySelector('.data-table');
            
            if (!table) return;
            
            const rows = table.querySelectorAll('tbody tr');
            
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
}

// ===================================
// Filtros de Botões
// ===================================
function initFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Aqui você implementaria a lógica de filtro
            const filterValue = this.textContent.trim();
            console.log('Filtro aplicado:', filterValue);
        });
    });
}

// ===================================
// Animação de Números (Counter)
// ===================================
function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-number');
    
    numbers.forEach(number => {
        const target = parseInt(number.textContent.replace(/\D/g, ''));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateNumber = () => {
            current += increment;
            if (current < target) {
                number.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                number.textContent = target;
            }
        };
        
        updateNumber();
    });
}

// ===================================
// Utilitários
// ===================================

// Formatar moeda
function formatCurrency(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Formatar data
function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR');
}

// Toast/Notificação
function showToast(message, type = 'success') {
    // Implementar sistema de notificações toast
    console.log(`[${type.toUpperCase()}] ${message}`);
}

// Confirmar ação
function confirmAction(message, callback) {
    if (confirm(message)) {
        callback();
    }
}

// ===================================
// Funções de CRUD (Exemplos)
// ===================================

// Adicionar Cliente
function addCliente(data) {
    console.log('Adicionando cliente:', data);
    showToast('Cliente adicionado com sucesso!');
}

// Editar Cliente
function editCliente(id, data) {
    console.log('Editando cliente:', id, data);
    showToast('Cliente atualizado com sucesso!');
}

// Deletar Cliente
function deleteCliente(id) {
    confirmAction('Deseja realmente excluir este cliente?', () => {
        console.log('Deletando cliente:', id);
        showToast('Cliente excluído com sucesso!', 'warning');
    });
}

// Adicionar Veículo
function addVeiculo(data) {
    console.log('Adicionando veículo:', data);
    showToast('Veículo adicionado com sucesso!');
}

// Adicionar OS
function addOS(data) {
    console.log('Adicionando OS:', data);
    showToast('Ordem de serviço criada com sucesso!');
}

// Adicionar Peça ao Estoque
function addPeca(data) {
    console.log('Adicionando peça:', data);
    showToast('Peça adicionada ao estoque!');
}

// Adicionar Lançamento Financeiro
function addLancamento(data) {
    console.log('Adicionando lançamento:', data);
    showToast('Lançamento registrado com sucesso!');
}

// ===================================
// Event Listeners Adicionais
// ===================================

// Listener para redimensionamento da janela
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
    }
});

// Listener para tecla ESC (fechar modals, etc)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('sidebar');
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }
});

// ===================================
// Funções de Exportação
// ===================================

// Exportar dados para CSV
function exportToCSV(data, filename) {
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

// Converter array para CSV
function convertToCSV(data) {
    if (data.length === 0) return '';
    
    const headers = Object.keys(data[0]);
    const csvRows = [];
    
    csvRows.push(headers.join(','));
    
    data.forEach(row => {
        const values = headers.map(header => {
            const value = row[header];
            return typeof value === 'string' && value.includes(',') 
                ? `"${value}"` 
                : value;
        });
        csvRows.push(values.join(','));
    });
    
    return csvRows.join('\\n');
}

// Imprimir relatório
function printReport() {
    window.print();
}

// ===================================
// LocalStorage Helpers
// ===================================

// Salvar dados localmente
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Erro ao salvar no localStorage:', e);
        return false;
    }
}

// Carregar dados localmente
function loadFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Erro ao carregar do localStorage:', e);
        return null;
    }
}

// Remover dados localmente
function removeFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (e) {
        console.error('Erro ao remover do localStorage:', e);
        return false;
    }
}

// ===================================
// Validações
// ===================================

// Validar CPF
function validateCPF(cpf) {
    cpf = cpf.replace(/[^\\d]/g, '');
    
    if (cpf.length !== 11) return false;
    if (/^(\\d)\\1+$/.test(cpf)) return false;
    
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    
    let digit = 11 - (sum % 11);
    if (digit > 9) digit = 0;
    if (digit !== parseInt(cpf.charAt(9))) return false;
    
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    
    digit = 11 - (sum % 11);
    if (digit > 9) digit = 0;
    if (digit !== parseInt(cpf.charAt(10))) return false;
    
    return true;
}

// Validar CNPJ
function validateCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\\d]/g, '');
    
    if (cnpj.length !== 14) return false;
    if (/^(\\d)\\1+$/.test(cnpj)) return false;
    
    let size = cnpj.length - 2;
    let numbers = cnpj.substring(0, size);
    let digits = cnpj.substring(size);
    let sum = 0;
    let pos = size - 7;
    
    for (let i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2) pos = 9;
    }
    
    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(0))) return false;
    
    size = size + 1;
    numbers = cnpj.substring(0, size);
    sum = 0;
    pos = size - 7;
    
    for (let i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2) pos = 9;
    }
    
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(1))) return false;
    
    return true;
}

// Validar Email
function validateEmail(email) {
    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return re.test(email);
}

// Validar Telefone
function validatePhone(phone) {
    phone = phone.replace(/[^\\d]/g, '');
    return phone.length >= 10 && phone.length <= 11;
}

// ===================================
// Máscaras de Input
// ===================================

// Máscara de CPF
function maskCPF(value) {
    value = value.replace(/\\D/g, '');
    value = value.replace(/(\\d{3})(\\d)/, '$1.$2');
    value = value.replace(/(\\d{3})(\\d)/, '$1.$2');
    value = value.replace(/(\\d{3})(\\d{1,2})$/, '$1-$2');
    return value;
}

// Máscara de CNPJ
function maskCNPJ(value) {
    value = value.replace(/\\D/g, '');
    value = value.replace(/(\\d{2})(\\d)/, '$1.$2');
    value = value.replace(/(\\d{3})(\\d)/, '$1.$2');
    value = value.replace(/(\\d{3})(\\d)/, '$1/$2');
    value = value.replace(/(\\d{4})(\\d{1,2})$/, '$1-$2');
    return value;
}

// Máscara de Telefone
function maskPhone(value) {
    value = value.replace(/\\D/g, '');
    value = value.replace(/^(\\d{2})(\\d)/g, '($1) $2');
    value = value.replace(/(\\d{4,5})(\\d{4})$/, '$1-$2');
    return value;
}

// Máscara de CEP
function maskCEP(value) {
    value = value.replace(/\\D/g, '');
    value = value.replace(/(\\d{5})(\\d)/, '$1-$2');
    return value;
}

// Máscara de Moeda
function maskCurrency(value) {
    value = value.replace(/\\D/g, '');
    value = (parseInt(value) / 100).toFixed(2);
    value = value.replace('.', ',');
    value = value.replace(/\\B(?=(\\d{3})+(?!\\d))/g, '.');
    return 'R$ ' + value;
}

// ===================================
// Feedback Visual
// ===================================

// Loading
function showLoading() {
    // Implementar overlay de loading
    console.log('Loading...');
}

function hideLoading() {
    // Remover overlay de loading
    console.log('Loading complete');
}

// ===================================
// Mobile Optimizations
// ===================================

// Prevenir double-tap zoom (mantendo pinch zoom)
let lastTouchEnd = 0;
document.addEventListener('touchend', function(e) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Prevenir pull-to-refresh no mobile
let touchStartY = 0;
document.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchmove', function(e) {
    const touchY = e.touches[0].clientY;
    const touchDiff = touchY - touchStartY;
    
    // Se tentar fazer scroll para cima quando já está no topo
    if (touchDiff > 0 && window.scrollY === 0) {
        e.preventDefault();
    }
}, { passive: false });

// Melhorar performance de scroll
let ticking = false;
let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(function() {
            // Adicionar classe quando scrollar para baixo
            const header = document.querySelector('.top-header');
            if (header) {
                if (lastScrollY > 50) {
                    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
                } else {
                    header.style.boxShadow = 'none';
                }
            }
            
            ticking = false;
        });
        
        ticking = true;
    }
});

// Detectar orientação do dispositivo
function handleOrientationChange() {
    const sidebar = document.getElementById('sidebar');
    const mobileOverlay = document.getElementById('mobileOverlay');
    
    // Fechar sidebar ao mudar orientação
    if (sidebar && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        if (mobileOverlay) {
            mobileOverlay.classList.remove('active');
        }
        document.body.style.overflow = '';
    }
}

window.addEventListener('orientationchange', handleOrientationChange);

// Adicionar feedback visual em elementos clicáveis (mobile)
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function(e) {
        const element = e.target.closest('.btn-action, .nav-link, .btn-primary, .btn-secondary, .filter-btn');
        if (element) {
            element.style.transition = 'transform 0.1s, opacity 0.1s';
            element.style.transform = 'scale(0.97)';
            element.style.opacity = '0.8';
        }
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        const element = e.target.closest('.btn-action, .nav-link, .btn-primary, .btn-secondary, .filter-btn');
        if (element) {
            setTimeout(() => {
                element.style.transform = 'scale(1)';
                element.style.opacity = '1';
            }, 100);
        }
    }, { passive: true });
}

// Lazy loading de imagens (se houver)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    // Observar imagens com data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Melhorar performance de animações
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (reducedMotion.matches) {
    // Reduzir animações para usuários que preferem
    document.documentElement.style.setProperty('--transition-speed', '0.05s');
}

// ===================================
// Inicialização Final
// ===================================
console.log('🚀 Sistema Volmaster carregado com sucesso!');
console.log('📊 Plataforma de Gestão de Oficina v1.0');
console.log('📱 Otimizações mobile ativadas!');
