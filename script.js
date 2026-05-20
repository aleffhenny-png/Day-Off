// 1. Base de dados oficial
const dadosFuncionarios = [
    { nome: "ACIVALDO VASCONCELO SOARES", area: "C#2", aniversario: "1994-07-12", dayOff: "" },
    { nome: "ADRIANO DA SILVA FONSECA", area: "C#", aniversario: "1984-05-15", dayOff: "" },
    { nome: "AIRTON GOMES", area: "PRODUÇÃO", aniversario: "2003-07-28", dayOff: "" },
    { nome: "ALDAIR DE CRUZ DANTAS", area: "C#2", aniversario: "1997-10-06", dayOff: "" },
    { nome: "ALESSANDRO DA SILVA DUTRA", area: "C#3", aniversario: "2002-08-13", dayOff: "" },
    { nome: "ALESSANDRO DA SILVA GOMES", area: "C#12", aniversario: "1999-03-03", dayOff: "2026-03-03" },
    { nome: "ALEXANDRE DA SILVA QUEIROZ", area: "C#4", aniversario: "2000-12-13", dayOff: "" },
    { nome: "ALYNE BRUNA BRAZ", area: "LABEL MACHINE", aniversario: "2001-03-16", dayOff: "2026-03-16" },
    { nome: "ANALCIRA BARBOSA LALOR", area: "FALL", aniversario: "1979-09-28", dayOff: "" },
    { nome: "ANDRE MARTINS", area: "C#12", aniversario: "1978-04-28", dayOff: "" },
    { nome: "ANDRE RIBEIRO", area: "INJETORAS", aniversario: "1967-03-30", dayOff: "2026-03-30" },
    { nome: "ANDREZA CARDOSO MARINHO", area: "RESPIRADOR", aniversario: "1993-03-05", dayOff: "2026-03-05" },
    { nome: "ANDRIW OLIVEIRA SALVINO", area: "FALL", aniversario: "", dayOff: "" },
    { nome: "ARIMACKSON ROLIM DE VASCONCELOS", area: "INJETORAS", aniversario: "1981-02-16", dayOff: "" },
    { nome: "BARBABA VIEIRA DA COSTA", area: "FALL", aniversario: "2000-11-15", dayOff: "" },
    { nome: "BEATRIZ SOUZA DA COSTA", area: "CONSPICUITY", aniversario: "2001-06-24", dayOff: "" },
    { nome: "BRUNO BRITO FREITAS DA SILVA", area: "C#5", aniversario: "2002-01-19", dayOff: "2026-01-10" },
    { nome: "BRYAN GAMA PAIVA", area: "PVC'S", aniversario: "2000-10-26", dayOff: "" },
    { nome: "CARLA LARRISA", area: "SOLDAS", aniversario: "1996-01-28", dayOff: "2025-01-31" },
    { nome: "CARLOS ALEXANDRE GOMES PERREIRA", area: "C#4", aniversario: "1991-12-14", dayOff: "" },
    { nome: "CLEONICE MARINHO PINTO", area: "FALL", aniversario: "1979-08-17", dayOff: "" },
    { nome: "CRISTIANO FLORENCIO", area: "TUNEL SHRINK", aniversario: "1977-09-30", dayOff: "" },
    { nome: "DANILO RANGEL C. BARBOSA", area: "GAWAN - C#6", aniversario: "1995-10-27", dayOff: "" },
    { nome: "DANRLEY DA SILVA COSTA SANTANA", area: "FERRAMENTAL", aniversario: "1995-08-08", dayOff: "" },
    { nome: "DAVI DE SOUZA RIBEIRO", area: "INJETORAS", aniversario: "2000-02-01", dayOff: "2026-02-16" },
    { nome: "ELIELMA CARVALHO MARTINS", area: "FALL", aniversario: "1983-12-05", dayOff: "" },
    { nome: "ELISON ROBERTO EURICO BANDEIRA", area: "ALIMENTADOR", aniversario: "2003-01-21", dayOff: "2026-01-24" },
    { nome: "EMANUEL SERRAO", area: "APRENDIZ", aniversario: "2006-01-11", dayOff: "2026-01-09" },
    { nome: "EMMELY BARAUNA", area: "LINT ROLLER", aniversario: "2002-03-21", dayOff: "2026-03-21" },
    { nome: "FRANCINETH DE SOUZA", area: "FALL", aniversario: "1963-10-18", dayOff: "" },
    { nome: "FRANCISCO HECTOR PANTOJA MESQUITA", area: "INJETORAS", aniversario: "2002-01-27", dayOff: "2026-02-24" },
    { nome: "GABRIELA DE MELO RIOS", area: "FRIPACK", aniversario: "1997-08-08", dayOff: "" },
    { nome: "GENY COLARES", area: "BANCADA MANUAL", aniversario: "1976-12-30", dayOff: "" },
    { nome: "GLORIA LOPES DE SOUZA", area: "LABEL MACHINE", aniversario: "2003-05-31", dayOff: "" },
    { nome: "GUILHERME ROGERIO DA SILVA LIMA", area: "C#2", aniversario: "2000-11-15", dayOff: "" },
    { nome: "HELENA KELLY RAMOS DE OLIVEIRA", area: "RESPIRADOR", aniversario: "1976-12-18", dayOff: "" },
    { nome: "HENNY ALEFF SOUZA", area: "CENTRAL DE ETIQUETAS", aniversario: "2005-01-12", dayOff: "2026-01-12" },
    { nome: "HEVERTON ALMEIDA", area: "FERRAMENTAL", aniversario: "1984-08-23", dayOff: "" },
    { nome: "ICKSON RODRIGUES COLARES", area: "C#1", aniversario: "2004-01-16", dayOff: "2025-01-02" },
    { nome: "IRENE CALDEIRA DE SOUSA", area: "FALL", aniversario: "2000-02-14", dayOff: "2026-02-16" },
    { nome: "IRACILDE DA CRUZ CAMPOS", area: "FALL", aniversario: "1972-08-19", dayOff: "" },
    { nome: "JOEL LALOR", area: "TUNEL SHRINK", aniversario: "1980-05-19", dayOff: "" },
    { nome: "JOSE ISAIAS FEIJO DOS SANTOS", area: "COBRIDEIRA", aniversario: "1983-10-29", dayOff: "" },
    { nome: "JOSE IVAN PALHETA DA CUNHA", area: "C#3", aniversario: "1966-03-05", dayOff: "2026-03-05" },
    { nome: "JOSE LUCAS", area: "C#4", aniversario: "1999-03-09", dayOff: "" },
    { nome: "JUCLEIDE FAGUNDES SOARES", area: "FALL", aniversario: "1976-06-04", dayOff: "" },
    { nome: "JUSINETE VALENTE DA CRUZ", area: "FALL", aniversario: "1969-09-19", dayOff: "" },
    { nome: "KETHLEN NAJY DA S.B", area: "NEW C1 MAO", aniversario: "1989-01-12", dayOff: "2025-01-12" },
    { nome: "LEANDRO MONTIERO", area: "INJETORAS", aniversario: "2002-02-21", dayOff: "2026-02-23" },
    { nome: "LEITICIA MANUELE FREIRE", area: "PVC 7", aniversario: "2003-06-04", dayOff: "" },
    { nome: "LUANA GABRIELLE", area: "BANCADA MANUAL", aniversario: "2000-01-01", dayOff: "2025-01-03" },
    { nome: "LUCAS MENDES", area: "INJETORAS", aniversario: "1999-02-14", dayOff: "2026-02-14" },
    { nome: "LUCIANO APOLONIO DE SOUZA", area: "GAWAN - C#6", aniversario: "1986-05-15", dayOff: "" },
    { nome: "MALCOM WESLEY", area: "C#5", aniversario: "1997-06-29", dayOff: "" },
    { nome: "MARCELO MACHADO MENDONÇA", area: "LANGEN - PVC 5", aniversario: "1987-06-19", dayOff: "" },
    { nome: "MARCIA LIMA", area: "CONTROLE DE INVENTARIO", aniversario: "1982-08-02", dayOff: "" },
    { nome: "MARCOS EDUARDO PASSOS DINIZ", area: "POST IT SCANDIA", aniversario: "2003-01-20", dayOff: "2026-01-24" },
    { nome: "MARIA EDUARDA VIEIRA DE LIMA", area: "VACCUM CENTER", aniversario: "2000-11-14", dayOff: "" },
    { nome: "MARIA SONGELA", area: "BLISTER VACCUM CENTER", aniversario: "1974-09-07", dayOff: "" },
    { nome: "MARINA PEREIRA COSTA", area: "TUNEL SHRINK", aniversario: "2001-05-20", dayOff: "" },
    { nome: "MATHEUS FERNANDES BRAZ", area: "FERRAMENTAL", aniversario: "1997-11-01", dayOff: "" },
    { nome: "MATHEUS SOUZA DIAS", area: "PVC 3", aniversario: "2001-12-21", dayOff: "" },
    { nome: "MAYCON MIRANDA SENA", area: "C#2", aniversario: "1998-03-18", dayOff: "2026-03-18" },
    { nome: "MIGUEL ANGEL GARCIA YENDEZ", area: "POST IT SCANDIA", aniversario: "2002-12-11", dayOff: "" },
    { nome: "MOISES BRITO DOS SANTOS", area: "FABRIMA / C2", aniversario: "2000-09-28", dayOff: "" },
    { nome: "NICOLLE THIPHANY SOUZA MAZZONI", area: "FRIPACK", aniversario: "2003-04-30", dayOff: "" },
    { nome: "PATRICIA BRASIL DE SÁ", area: "RESPIRADOR", aniversario: "1982-12-17", dayOff: "" },
    { nome: "PATRICIA DOS SANTOS MARQUES", area: "FALL", aniversario: "1988-06-20", dayOff: "" },
    { nome: "PAULO MENEZES", area: "POST IT SCANDIA", aniversario: "2002-11-04", dayOff: "" },
    { nome: "PAULO SOARES LIMA", area: "LINT ROLLER", aniversario: "1969-04-30", dayOff: "" },
    { nome: "PETERSON DE SOUZA SILVA", area: "C#4", aniversario: "1986-11-21", dayOff: "" },
    { nome: "RAILSON BERÇA", area: "LANGEN - PVC 5", aniversario: "1989-05-10", dayOff: "" },
    { nome: "RALYSON DOS SANTOS", area: "PVC 1", aniversario: "2002-06-17", dayOff: "" },
    { nome: "RAQUEL DE MELO", area: "FRIPACK", aniversario: "2003-10-15", dayOff: "" },
    { nome: "RAYSSA MONIQUE BELIZARIO DE FREITAS", area: "APRENDIZ", aniversario: "2004-08-28", dayOff: "" },
    { nome: "REGIANE DA CUNHA NERY", area: "FALL", aniversario: "1981-12-15", dayOff: "" },
    { nome: "ROSANA DE SOUZA VIERA", area: "FALL", aniversario: "1970-06-19", dayOff: "" },
    { nome: "ROSIMEIRE NASCIMENTO", area: "LINT ROLLER", aniversario: "2000-11-12", dayOff: "" },
    { nome: "SAMEA DA TRINDADES VALENTE", area: "RESPIRADOR", aniversario: "1993-08-30", dayOff: "" },
    { nome: "SAMUEL CRUZ DE OLIVEIRA", area: "COBRIDEIRA", aniversario: "1992-05-15", dayOff: "" },
    { nome: "SIRLENE PEREIRA DA SILVA", area: "SOLDAS", aniversario: "1982-10-14", dayOff: "" },
    { nome: "SORAIA SOUZA DE OLIVEIRA", area: "FALL", aniversario: "1988-06-15", dayOff: "" },
    { nome: "STHEPHANIE OLIVEIRA DE SOUZA", area: "FALL", aniversario: "1993-03-23", dayOff: "2026-03-23" },
    { nome: "THENNY MAZZONI", area: "CONTROLE DE INVENTARIO", aniversario: "1980-04-27", dayOff: "" },
    { nome: "VALDERCLEY LIMA", area: "C#4", aniversario: "1979-03-19", dayOff: "2026-03-19" },
    { nome: "VALDIZA ALVES SOUZA", area: "FALL", aniversario: "1980-02-14", dayOff: "2026-02-19" },
    { nome: "VICTOR MATTHAUS PRAIA CAVALCANTE", area: "COBRIDEIRA", aniversario: "1999-04-07", dayOff: "" },
    { nome: "VIVIANE ALBUQUERQUE ALVARENGA", area: "LINT ROLLER", aniversario: "2003-07-05", dayOff: "" },
    { nome: "WALERIA BARBOSA DOS SANTOS PINTO", area: "INJETORAS", aniversario: "1985-01-20", dayOff: "2026-01-19" }
];

const nomesMeses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

function iniciarSeletores() {
    const selectAdd = document.getElementById('nomeFuncionario');
    const selectCheck = document.getElementById('consultaFuncionario');
    if (!selectAdd || !selectCheck) return;

    selectAdd.innerHTML = '<option value="">Selecione quem vai tirar folga...</option>';
    selectCheck.innerHTML = '<option value="">Selecione um nome para verificar...</option>';

    const ordenados = [...dadosFuncionarios].sort((a, b) => a.nome.localeCompare(b.nome));

    ordenados.forEach(u => {
        const op1 = document.createElement('option');
        op1.value = u.nome;
        op1.textContent = `${u.nome} (${u.area})`;
        selectAdd.appendChild(op1);

        const op2 = document.createElement('option');
        op2.value = u.nome;
        op2.textContent = u.nome;
        selectCheck.appendChild(op2);
    });
}

// NOVO: Exibe os aniversariantes do mês corrente de forma dinâmica
function renderizarAniversariantesMes() {
    const lista = document.getElementById('listaAniversariantesMes');
    const titulo = document.getElementById('tituloAniversariantes');
    if (!lista) return;

    const mesAtualIndex = new Date().getMonth(); 
    const nomeMesAtual = nomesMeses[mesAtualIndex];
    titulo.textContent = `🎂 Aniversariantes do Mês de ${nomeMesAtual.toUpperCase()}`;

    lista.innerHTML = "";

    const aniversariantes = dadosFuncionarios.filter(f => {
        if (!f.aniversario) return false;
        const mesFuncionario = parseInt(f.aniversario.substring(5, 7), 10);
        return (mesFuncionario - 1) === mesAtualIndex;
    }).sort((a,b) => a.aniversario.localeCompare(b.aniversario));

    if (aniversariantes.length === 0) {
        lista.innerHTML = `<li style="color:#888; font-style:italic; grid-column: 1/-1;">Nenhum aniversariante listado neste mês.</li>`;
        return;
    }

    aniversariantes.forEach(f => {
        const dia = f.aniversario.substring(8, 10);
        const li = document.createElement('li');
        li.style.padding = "6px 10px";
        li.style.background = "#eef4fa";
        li.style.borderRadius = "4px";
        li.style.fontSize = "13px";
        li.innerHTML = `🏅 <strong>Dia ${dia}</strong> - ${f.nome} <span style="color:#666; font-size:11px;">(${f.area})</span>`;
        lista.appendChild(li);
    });
}

// NOVO: Consulta Individual de Dados ao selecionar no campo
function consultarColaborador() {
    const nomeSelected = document.getElementById('consultaFuncionario').value;
    const divResultado = document.getElementById('resultadoConsulta');
    if (!divResultado) return;

    if (!nomeSelected) {
        divResultado.innerHTML = "Selecione um funcionário acima para ver o dia do aniversário / Day Off.";
        divResultado.style.borderLeftColor = "#0275d8";
        return;
    }

    const colaborador = dadosFuncionarios.find(f => f.nome === nomeSelected);
    if (colaborador) {
        let dataNiverForm = "Não Informado";
        if (colaborador.aniversario) {
            const partes = colaborador.aniversario.split('-');
            dataNiverForm = `${partes[2]}/${partes[1]}`;
        }

        // Calcula qual o Day Off agendado ou previsto
        const salvos = JSON.parse(localStorage.getItem('dayOffList')) || [];
        const manual = salvos.find(m => m.nome === colaborador.nome);
        
        let dataDayOffExibicao = "Ainda não definido ou pendente";
        if (manual) {
            const p = manual.data.split('-');
            dataDayOffExibicao = `${p[2]}/${p[1]}/${p[0]} (Agendado na Tela)`;
        } else if (colaborador.dayOff) {
            const p = colaborador.dayOff.split('-');
            dataDayOffExibicao = `${p[2]}/${p[1]}/${p[0]} (Definido em Planilha)`;
        } else if (colaborador.aniversario) {
            const p = colaborador.aniversario.split('-');
            dataDayOffExibicao = `${p[2]}/${p[1]}/${new Date().getFullYear()} (Previsto pelo Aniversário)`;
        }

        divResultado.innerHTML = `
            <strong>Colaborador:</strong> ${colaborador.nome}<br>
            <strong>Setor/Área:</strong> ${colaborador.area}<br>
            <strong>📅 Dia do Aniversário:</strong> ${dataNiverForm}<br>
            <strong>⭐ Data do Day Off:</strong> <span style="color:#d9534f; font-weight:bold;">${dataDayOffExibicao}</span>
        `;
        divResultado.style.borderLeftColor = "#d9534f";
    }
}

// ATUALIZADO: Salva o agendamento pedindo a CAIXA DE CONFIRMAÇÃO
function salvarAgendamento() {
    const nome = document.getElementById('nomeFuncionario').value;
    const data = document.getElementById('dataFolga').value;

    if (!nome || !data) {
        alert("Por favor, selecione o Funcionário e a Data pretendida antes de agendar.");
        return;
    }

    const partesData = data.split('-');
    const dataFormatadaBr = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

    // Janela de confirmação nativa pedida pela chefa
    const confirmou = confirm(`CONFIRMAÇÃO DE SEGURANÇA:\n\nVocê tem certeza que deseja agendar o Day Off do colaborador:\n👉 ${nome}\n\nPara o dia:\n📅 ${dataFormatadaBr}?`);
    
    if (!confirmou) {
        return; // Cancela e não faz nada
    }

    const novoAgendamento = { nome: nome, data: data };
    const salvos = JSON.parse(localStorage.getItem('dayOffList')) || [];
    
    const jaExiste = salvos.some(s => s.nome === nome && s.data === data);
    if (!jaExiste) {
        salvos.push(novoAgendamento);
        localStorage.setItem('dayOffList', JSON.stringify(salvos));
    }

    document.getElementById('dataFolga').value = '';
    document.getElementById('nomeFuncionario').value = '';

    renderizarPainelChefe();
    alert("Day Off agendado com sucesso!");
}

// ATUALIZADO: Renderiza as listas e alimenta a Tabela de Histórico da outra página
function renderizarPainelChefe() {
    const ulHoje = document.getElementById('folgaHoje');
    const ulAmanha = document.getElementById('folgaAmanha');
    const tabelaHistorico = document.getElementById('tabelaHistoricoCorpo');

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const amanha = new Date(hoje);
    amanha.setDate(amanha.getDate() + 1);

    const agendamentosManuais = JSON.parse(localStorage.getItem('dayOffList')) || [];
    let todasAsFolgas = [];

    dadosFuncionarios.forEach(f => {
        let dataAlvo = null;
        const manual = agendamentosManuais.find(m => m.nome === f.nome);
        
        if (manual) {
            dataAlvo = new Date(manual.data + 'T00:00:00');
        } else if (f.dayOff && f.dayOff.startsWith("2026")) {
            dataAlvo = new Date(f.dayOff + 'T00:00:00');
        } else if (f.aniversario) {
            const mesDia = f.aniversario.substring(5);
            if (mesDia) dataAlvo = new Date(`${hoje.getFullYear()}-${mesDia}T00:00:00`);
        }

        if (dataAlvo && !isNaN(dataAlvo.getTime())) {
            todasAsFolgas.push({
                nome: f.nome,
                area: f.area,
                time: dataAlvo.getTime(),
                dataTexto: dataAlvo.toLocaleDateString('pt-BR')
            });
        }
    });

    // 1. Alimenta as seções da Página Inicial (Hoje e Amanhã)
    if (listaItens) {
        listaItens.innerHTML = `
            <div class="bloco-setor">
                <h3 style="border-left: 4px solid #e11b22;">☀️ QUEM FOLGA HOJE</h3>
                <ul id="folgaHoje" style="background: #ffffff; border: 1px solid #dddddd; padding: 15px; list-style: none;"></ul>
            </div>
            
            <div class="bloco-setor" style="margin-top: 20px;">
                <h3 style="border-left: 4px solid #f0ad4e;">🌅 QUEM FOLGA AMANHÃ</h3>
                <ul id="folgaAmanha" style="background: #ffffff; border: 1px solid #dddddd; padding: 15px; list-style: none;"></ul>
            </div>
        `;
        
        const refHoje = document.getElementById('folgaHoje');
        const refAmanha = document.getElementById('folgaAmanha');
        let contHoje = 0;
        let contAmanha = 0;

        todasAsFolgas.forEach(item => {
            const li = document.createElement('li');
            li.style.padding = "10px 0";
            li.style.fontSize = "14px";
            li.style.borderBottom = "1px solid #eee";
            li.innerHTML = `• <strong>${item.nome}</strong> — Setor: ${item.area || 'Produção'}`;

            if (item.time === hoje.getTime()) {
                refHoje.appendChild(li);
                contHoje++;
            } else if (item.time === amanha.getTime()) {
                refAmanha.appendChild(li);
                contAmanha++;
            }
        });

        if (contHoje === 0) refHoje.innerHTML = '<li style="color: #999; font-style: italic; padding: 5px 0;">Nenhuma folga programada para hoje.</li>';
        if (contAmanha === 0) refAmanha.innerHTML = '<li style="color: #999; font-style: italic; padding: 5px 0;">Nenhuma folga programada para amanhã.</li>';
    }

    // 2. Alimenta a tabela da Página de Histórico Completo
    if (tabelaHistorico) {
        tabelaHistorico.innerHTML = "";
        
        // Ordena o histórico colocando as datas mais recentes/futuras primeiro
        const ordenadasHistorico = [...todasAsFolgas].sort((a,b) => b.time - a.time);

        ordenadasHistorico.forEach(item => {
            const tr = document.createElement('tr');
            tr.style.borderBottom = "1px solid #eee";
            tr.innerHTML = `
                <td style="padding: 10px 8px; font-weight: 500;">${item.nome}</td>
                <td style="padding: 10px 8px; color: #666;">${item.area || 'PRODUÇÃO'}</td>
                <td style="padding: 10px 8px; font-weight: bold; color: #2e7d32;">${item.dataTexto}</td>
            `;
            tabelaHistorico.appendChild(tr);
        });
    }
}

// LÓGICA DE ALTERNÂNCIA DE ABAS (PÁGINAS)
function configurarAbas() {
    const btnPrincipal = document.getElementById('abaPrincipalBtn');
    const btnHistorico = document.getElementById('abaHistoricoBtn');
    const pagPrincipal = document.getElementById('paginaPrincipal');
    const pagHistorico = document.getElementById('paginaHistorico');

    if (!btnPrincipal || !btnHistorico) return;

    btnPrincipal.addEventListener('click', () => {
        pagPrincipal.style.display = "block";
        pagHistorico.style.display = "none";
        btnPrincipal.style.background = "#e11b22";
        btnPrincipal.style.color = "white";
        btnHistorico.style.background = "#e0e0e0";
        btnHistorico.style.color = "#333";
    });

    btnHistorico.addEventListener('click', () => {
        pagPrincipal.style.display = "none";
        pagHistorico.style.display = "block";
        btnHistorico.style.background = "#e11b22";
        btnHistorico.style.color = "white";
        btnPrincipal.style.background = "#e0e0e0";
        btnPrincipal.style.color = "#333";
    });
}

window.onload = () => {
    iniciarSeletores();
    renderizarAniversariantesMes();
    renderizarPainelChefe();
    configurarAbas();
};

const addBtn = document.getElementById('addBtn');
if (addBtn) {
    addBtn.addEventListener('click', salvarAgendamento);
}