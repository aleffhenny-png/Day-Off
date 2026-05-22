// ==================== 1. BASE DE DADOS OFICIAL COM SUPERVISÃO ====================
const dadosFuncionarios = [
    { nome: "ACIVALDO VASCONCELO SOARES", area: "C#2", aniversario: "1994-07-12", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "ADRIANO DA SILVA FONSECA", area: "C#", aniversario: "1984-05-15", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "AIRTON GOMES", area: "PRODUÇÃO", aniversario: "2003-07-28", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "ALDAIR DE CRUZ DANTAS", area: "C#2", aniversario: "1997-10-06", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "ALESSANDRO DA SILVA DUTRA", area: "C#3", aniversario: "2002-08-13", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "ALESSANDRO DA SILVA GOMES", area: "C#12", aniversario: "1999-03-03", dayOff: "2026-03-03", supervisor: "Hellen Alexandre" },
    { nome: "ALEXANDRE DA SILVA QUEIROZ", area: "C#4", aniversario: "2000-12-13", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "ALYNE BRUNA BRAZ", area: "LABEL MACHINE", aniversario: "2001-03-16", dayOff: "2026-03-16", supervisor: "Hellen Alexandre" },
    { nome: "ANALCIRA BARBOSA LALOR", area: "FALL", aniversario: "1979-09-28", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "ANDRE MARTINS", area: "C#12", aniversario: "1978-04-28", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "ANDRE RIBEIRO", area: "INJETORAS", aniversario: "1967-03-30", dayOff: "2026-03-30", supervisor: "Hellen Alexandre" },
    { nome: "ANDREZA CARDOSO MARINHO", area: "RESPIRADOR", aniversario: "1993-03-05", dayOff: "2026-03-05", supervisor: "Mariles Moraes" },
    { nome: "ANDRIW OLIVEIRA SALVINO", area: "FALL", aniversario: "", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "ARIMACKSON ROLIM DE VASCONCELOS", area: "INJETORAS", aniversario: "1981-02-16", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "BARBABA VIEIRA DA COSTA", area: "FALL", aniversario: "2000-11-15", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "BEATRIZ SOUZA DA COSTA", area: "CONSPICUITY", aniversario: "2001-06-24", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "BRUNO BRITO FREITAS DA SILVA", area: "C#5", aniversario: "2002-01-19", dayOff: "2026-01-10", supervisor: "Hellen Alexandre" },
    { nome: "BRYAN GAMA PAIVA", area: "PVC'S", aniversario: "2000-10-26", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "CARLA LARRISA", area: "SOLDAS", aniversario: "1996-01-28", dayOff: "2025-01-31", supervisor: "Hellen Alexandre" },
    { nome: "CARLOS ALEXANDRE GOMES PERREIRA", area: "C#4", aniversario: "1991-12-14", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "CLEONICE MARINHO PINTO", area: "FALL", aniversario: "1979-08-17", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "CRISTIANO FLORENCIO", area: "TUNEL SHRINK", aniversario: "1977-09-30", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "DANILO RANGEL C. BARBOSA", area: "GAWAN - C#6", aniversario: "1995-10-27", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "DANRLEY DA SILVA COSTA SANTANA", area: "FERRAMENTAL", aniversario: "1995-08-08", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "DAVI DE SOUZA RIBEIRO", area: "INJETORAS", aniversario: "2000-02-01", dayOff: "2026-02-16", supervisor: "Hellen Alexandre" },
    { nome: "ELIELMA CARVALHO MARTINS", area: "FALL", aniversario: "1983-12-05", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "ELISON ROBERTO EURICO BANDEIRA", area: "ALIMENTADOR", aniversario: "2003-01-21", dayOff: "2026-01-24", supervisor: "Hellen Alexandre" },
    { nome: "EMANUEL SERRAO", area: "APRENDIZ", aniversario: "2006-01-11", dayOff: "2026-01-09", supervisor: "Hellen Alexandre" },
    { nome: "EMMELY BARAUNA", area: "LINT ROLLER", aniversario: "2002-03-21", dayOff: "2026-03-21", supervisor: "Hellen Alexandre" },
    { nome: "FRANCINETH DE SOUZA", area: "FALL", aniversario: "1963-10-18", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "FRANCISCO HECTOR PANTOJA MESQUITA", area: "INJETORAS", aniversario: "2002-01-27", dayOff: "2026-02-24", supervisor: "Hellen Alexandre" },
    { nome: "GABRIELA DE MELO RIOS", area: "FRIPACK", aniversario: "1997-08-08", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "GENY COLARES", area: "BANCADA MANUAL", aniversario: "1976-12-30", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "GLORIA LOPES DE SOUZA", area: "LABEL MACHINE", aniversario: "2003-05-31", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "GUILHERME ROGERIO DA SILVA LIMA", area: "C#2", aniversario: "2000-11-15", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "HELENA KELLY RAMOS DE OLIVEIRA", area: "RESPIRADOR", aniversario: "1976-12-18", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "HENNY ALEFF SOUZA", area: "CENTRAL DE ETIQUETAS", aniversario: "2005-01-12", dayOff: "2026-01-12", supervisor: "Hellen Alexandre" },
    { nome: "HEVERTON ALMEIDA", area: "FERRAMENTAL", aniversario: "1984-08-23", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "ICKSON RODRIGUES COLARES", area: "C#1", aniversario: "2004-01-16", dayOff: "2025-01-02", supervisor: "Hellen Alexandre" },
    { nome: "IRENE CALDEIRA DE SOUSA", area: "FALL", aniversario: "2000-02-14", dayOff: "2026-02-16", supervisor: "Mariles Moraes" },
    { nome: "IRACILDE DA CRUZ CAMPOS", area: "FALL", aniversario: "1972-08-19", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "JOEL LALOR", area: "TUNEL SHRINK", aniversario: "1980-05-19", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "JOSE ISAIAS FEIJO DOS SANTOS", area: "COBRIDEIRA", aniversario: "1983-10-29", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "JOSE IVAN PALHETA DA CUNHA", area: "C#3", aniversario: "1966-03-05", dayOff: "2026-03-05", supervisor: "Hellen Alexandre" },
    { nome: "JOSE LUCAS", area: "C#4", aniversario: "1999-03-09", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "JUCLEIDE FAGUNDES SOARES", area: "FALL", aniversario: "1976-06-04", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "JUSINETE VALENTE DA CRUZ", area: "FALL", aniversario: "1969-09-19", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "KETHLEN NAJY DA S.B", area: "NEW C1 MAO", aniversario: "1989-01-12", dayOff: "2025-01-12", supervisor: "Hellen Alexandre" },
    { nome: "LEANDRO MONTIERO", area: "INJETORAS", aniversario: "2002-02-21", dayOff: "2026-02-23", supervisor: "Hellen Alexandre" },
    { nome: "LEITICIA MANUELE FREIRE", area: "PVC 7", aniversario: "2003-06-04", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "LUANA GABRIELLE", area: "BANCADA MANUAL", aniversario: "2000-01-01", dayOff: "2025-01-03", supervisor: "Hellen Alexandre" },
    { nome: "LUCAS MENDES", area: "INJETORAS", aniversario: "1999-02-14", dayOff: "2026-02-14", supervisor: "Hellen Alexandre" },
    { nome: "LUCIANO APOLONIO DE SOUZA", area: "GAWAN - C#6", aniversario: "1986-05-15", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "MALCOM WESLEY", area: "C#5", aniversario: "1997-06-29", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "MARCELO MACHADO MENDONÇA", area: "LANGEN - PVC 5", aniversario: "1987-06-19", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "MARCIA LIMA", area: "CONTROLE DE INVENTARIO", aniversario: "1982-08-02", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "MARCOS EDUARDO PASSOS DINIZ", area: "POST IT SCANDIA", aniversario: "2003-01-20", dayOff: "2026-01-24", supervisor: "Hellen Alexandre" },
    { nome: "MARIA EDUARDA VIEIRA DE LIMA", area: "VACCUM CENTER", aniversario: "2000-11-14", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "MARIA SONGELA", area: "BLISTER VACCUM CENTER", aniversario: "1974-09-07", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "MARINA PEREIRA COSTA", area: "TUNEL SHRINK", aniversario: "2001-05-20", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "MATHEUS FERNANDES BRAZ", area: "FERRAMENTAL", aniversario: "1997-11-01", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "MATHEUS SOUZA DIAS", area: "PVC 3", aniversario: "2001-12-21", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "MAYCON MIRANDA SENA", area: "C#2", aniversario: "1998-03-18", dayOff: "2026-03-18", supervisor: "Hellen Alexandre" },
    { nome: "MIGUEL ANGEL GARCIA YENDEZ", area: "POST IT SCANDIA", aniversario: "2002-12-11", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "MOISES BRITO DOS SANTOS", area: "FABRIMA / C2", aniversario: "2000-09-28", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "NICOLLE THIPHANY SOUZA MAZZONI", area: "FRIPACK", aniversario: "2003-04-30", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "PATRICIA BRASIL DE SÁ", area: "RESPIRADOR", aniversario: "1982-12-17", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "PATRICIA DOS SANTOS MARQUES", area: "FALL", aniversario: "1988-06-20", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "PAULO MENEZES", area: "POST IT SCANDIA", aniversario: "2002-11-04", dayOff: "2026-01-10", supervisor: "Hellen Alexandre" },
    { nome: "PAULO SOARES LIMA", area: "LINT ROLLER", aniversario: "1969-04-30", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "PETERSON DE SOUZA SILVA", area: "C#4", aniversario: "1986-11-21", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "RAILSON BERÇA", area: "LANGEN - PVC 5", aniversario: "1989-05-10", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "RALYSON DOS SANTOS", area: "PVC 1", aniversario: "2002-06-17", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "RAQUEL DE MELO", area: "FRIPACK", aniversario: "2003-10-15", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "RAYSSA MONIQUE BELIZARIO DE FREITAS", area: "APRENDIZ", aniversario: "2004-08-28", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "MEDIATE DA CUNHA NERY", area: "FALL", aniversario: "1981-12-15", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "ROSANA DE SOUZA VIERA", area: "FALL", aniversario: "1970-06-19", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "ROSIMEIRE NASCIMENTO", area: "LINT ROLLER", aniversario: "2000-11-12", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "SAMEA DA TRINDADES VALENTE", area: "RESPIRADOR", aniversario: "1993-08-30", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "SAMUEL CRUZ DE OLIVEIRA", area: "COBRIDEIRA", aniversario: "1992-05-15", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "SIRLENE PEREIRA DA SILVA", area: "SOLDAS", aniversario: "1982-10-14", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "SORAIA SOUZA DE OLIVEIRA", area: "FALL", aniversario: "1988-06-15", dayOff: "", supervisor: "Mariles Moraes" },
    { nome: "STHEPHANIE OLIVEIRA DE SOUZA", area: "FALL", aniversario: "1993-03-23", dayOff: "2026-03-23", supervisor: "Mariles Moraes" },
    { nome: "THENNY MAZZONI", area: "CONTROLE DE INVENTARIO", aniversario: "1980-04-27", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "VALDERCLEY LIMA", area: "C#4", aniversario: "1979-03-19", dayOff: "2026-03-19", supervisor: "Hellen Alexandre" },
    { nome: "VALDIZA ALVES SOUZA", area: "FALL", aniversario: "1980-02-14", dayOff: "2026-02-19", supervisor: "Mariles Moraes" },
    { nome: "VICTOR MATTHAUS PRAIA CAVALCANTE", area: "COBRIDEIRA", aniversario: "1999-04-07", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "VIVIANE ALBUQUERQUE ALVARENGA", area: "LINT ROLLER", aniversario: "2003-07-05", dayOff: "", supervisor: "Hellen Alexandre" },
    { nome: "WALERIA BARBOSA DOS SANTOS PINTO", area: "INJETORAS", aniversario: "1985-01-20", dayOff: "2026-01-19", supervisor: "Hellen Alexandre" }
];

let supervisorLogado = "";

const nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// ==================== OBJETO DE SENHAS ÚNICAS ====================
// Altere os valores das propriedades abaixo para definir as senhas de cada uma!
const senhasSupervisores = {
    "Hellen Alexandre": "hellen789",
    "Mariles Moraes": "mariles456"
};

// ==================== 2. SISTEMA DE LOGIN ====================
function realizarLogin() {
    const nome = document.getElementById('loginSupervisor').value;
    const senha = document.getElementById('loginSenha').value;
    const msgErro = document.getElementById('erroLogin');

    if (nome === "") {
        msgErro.textContent = "Por favor, selecione seu nome.";
        return;
    }

    // Busca a senha definida para o supervisor selecionado
    const senhaCorreta = senhasSupervisores[nome];

    // Compara se a senha digitada bate com a cadastrada
    if (senha === senhaCorreta) {
        supervisorLogado = nome;
        document.getElementById('loginOverlay').style.display = "none";
        document.getElementById('appContent').style.display = "block";
        
        document.querySelector('.user-area').textContent = `Supervisor(a): ${nome}`;
        
        atualizarPainelCompleto();
    } else {
        msgErro.textContent = "Senha incorreta.";
    }
}

function obterSubordinadosFiltrados() {
    return dadosFuncionarios.filter(f => f.supervisor === supervisorLogado);
}

function atualizarPainelCompleto() {
    const listaFiltrada = obterSubordinadosFiltrados();
    
    popularSeletores(listaFiltrada);
    renderizarPainelHeijunka(listaFiltrada);
    renderizarDestaqueMes(listaFiltrada);
    renderizarCalendarioCompleto(listaFiltrada); // Nova função que alimenta os 12 quadrados
}

// Lógica de Alternar Abas (Tabs)
function alternarAba(idAba) {
    // Gerenciar estado dos botões
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Gerenciar visibilidade dos blocks
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active-content'));
    document.getElementById(`aba-${idAba}`).classList.add('active-content');
}

// ==================== 3. LÓGICA DO DASHBOARD INDIVIDUAL ====================

function popularSeletores(lista) {
    const selectAdd = document.getElementById('nomeFuncionario');
    const selectCheck = document.getElementById('consultaFuncionario');
    
    selectAdd.innerHTML = '<option value="">Selecione quem vai tirar folga...</option>';
    selectCheck.innerHTML = '<option value="">Selecione um nome...</option>';

    const ordenados = [...lista].sort((a, b) => a.nome.localeCompare(b.nome));

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

function renderizarPainelHeijunka(lista) {
    const corpo = document.getElementById('tabelaCorpo');
    corpo.innerHTML = "";

    if(lista.length === 0) {
        corpo.innerHTML = `<tr><td colspan="5" style="text-align:center;">Nenhum funcionário vinculado.</td></tr>`;
        return;
    }

    lista.forEach(func => {
        const tr = document.createElement('tr');
        
        let niverFormatado = "---";
        if(func.aniversario) {
            const partes = func.aniversario.split('-');
            niverFormatado = partes.length === 3 ? `${partes[2]}/${partes[1]}` : func.aniversario;
        }

        let dayOffFormatado = `<span class="folga-vazia">Não definida</span>`;
        if(func.dayOff) {
            const partes = func.dayOff.split('-');
            dayOffFormatado = partes.length === 3 ? `<span class="folga-marcada">📆 ${partes[2]}/${partes[1]}/${partes[0]}</span>` : `<span class="folga-marcada">${func.dayOff}</span>`;
        }

        tr.innerHTML = `
            <td><strong>${func.nome}</strong></td>
            <td>${func.area}</td>
            <td>${niverFormatado}</td>
            <td>${dayOffFormatado}</td>
            <td>
                ${func.dayOff ? `<button class="btn-limpar" onclick="removerDayOff('${func.nome}')">Limpar</button>` : '---'}
            </td>
        `;
        corpo.appendChild(tr);
    });
}

// Mini lista lateral: Destaque do Mês Atual
function renderizarDestaqueMes(lista) {
    const container = document.getElementById('listaAniversariantes');
    container.innerHTML = "";

    const mesAtual = new Date().getMonth() + 1;

    const aniversariantesDoMes = lista.filter(func => {
        if (!func.aniversario) return false;
        const partes = func.aniversario.split('-');
        return partes.length === 3 ? parseInt(partes[1], 10) === mesAtual : false;
    });

    if (aniversariantesDoMes.length === 0) {
        container.innerHTML = `<p style="font-size: 11px; color:#888; text-align:center;">Nenhum aniversário em ${nomesMeses[mesAtual-1]}.</p>`;
        return;
    }

    aniversariantesDoMes.sort((a,b) => parseInt(a.aniversario.split('-')[2]) - parseInt(b.aniversario.split('-')[2]));

    aniversariantesDoMes.forEach(func => {
        const partes = func.aniversario.split('-');
        const item = document.createElement('div');
        item.className = "niver-item";
        item.innerHTML = `<span>🎈 ${func.nome}</span> <span>${partes[2]}/${partes[1]}</span>`;
        container.appendChild(item);
    });
}

// ==================== 4. NOVA LÓGICA: GRADE CALENDÁRIO ANUAL COMPLETO ====================
function renderizarCalendarioCompleto(lista) {
    const grade = document.getElementById('gradeMeses');
    grade.innerHTML = ""; // Limpa a grade antiga

    const mesAtualSistema = new Date().getMonth() + 1;

    // Gerar a caixinha de cada um dos 12 meses
    for (let m = 1; m <= 12; m++) {
        const mesCard = document.createElement('div');
        mesCard.className = "mes-card";

        // Nome do mês no topo do quadrado
        const titulo = document.createElement('div');
        titulo.className = "mes-titulo";
        titulo.textContent = nomesMeses[m - 1].toUpperCase();
        // Pequeno destaque se for o mês corrente
        if(m === mesAtualSistema) {
            titulo.style.backgroundColor = "#9b0f14"; 
            titulo.textContent += " (ESTE MÊS)";
        }
        mesCard.appendChild(titulo);

        // Espaço onde entram os nomes
        const conteudo = document.createElement('div');
        conteudo.className = "mes-conteudo";

        // Filtrar operadores que fazem aniversário neste mês 'm'
        const nascidosNoMes = lista.filter(func => {
            if (!func.aniversario) return false;
            const partes = func.aniversario.split('-');
            return partes.length === 3 ? parseInt(partes[1], 10) === m : false;
        });

        if (nascidosNoMes.length === 0) {
            conteudo.innerHTML = `<span class="mes-vazio">Nenhum aniversariante</span>`;
        } else {
            // Ordenar por dia do mês
            nascidosNoMes.sort((a,b) => parseInt(a.aniversario.split('-')[2]) - parseInt(b.aniversario.split('-')[2]));

            nascidosNoMes.forEach(func => {
                const dia = func.aniversario.split('-')[2];
                const itemNiver = document.createElement('div');
                // Se for o mês atual, ganha uma classe estilizada diferente
                itemNiver.className = `mes-niver-item ${m === mesAtualSistema ? 'hoje' : ''}`;
                
                // Abrevia o nome muito longo para não quebrar o quadrado do calendário
                const nomeCurto = func.nome.split(' ').slice(0, 2).join(' ');

                itemNiver.innerHTML = `<span>👤 ${nomeCurto}</span> <strong>Dia ${dia}</strong>`;
                conteudo.appendChild(itemNiver);
            });
        }

        mesCard.appendChild(conteudo);
        grade.appendChild(mesCard);
    }
}

// ==================== 5. OUTRAS AÇÕES DE MANIPULAÇÃO ====================
function salvarDayOff() {
    const nome = document.getElementById('nomeFuncionario').value;
    const data = document.getElementById('dataDayOff').value;

    if (!nome || !data) {
        alert("Preencha o operador e a data do Day Off!");
        return;
    }

    const funcionario = dadosFuncionarios.find(f => f.nome === nome);
    if (funcionario) {
        funcionario.dayOff = data;
        alert(`Day Off de ${funcionario.nome} salvo!`);
        document.getElementById('dataDayOff').value = "";
        atualizarPainelCompleto();
    }
}

// Remover Day Off
function removerDayOff(nome) {
    if(confirm(`Deseja remover o Day Off de ${nome}?`)) {
        const funcionario = dadosFuncionarios.find(f => f.nome === nome);
        if (funcionario) {
            funcionario.dayOff = "";
            atualizarPainelCompleto();
        }
    }
}

// Consultar Individual
function consultarFuncionario() {
    const nome = document.getElementById('consultaFuncionario').value;
    const box = document.getElementById('resultadoConsulta');

    if (!nome) {
        box.style.display = "none";
        return;
    }

    const func = dadosFuncionarios.find(f => f.nome === nome);
    if (func) {
        let statusFolga = func.dayOff ? `✅ Agendada para ${func.dayOff.split('-').reverse().join('/')}` : "❌ Nenhuma folga marcada";
        let niver = func.aniversario ? func.aniversario.split('-').reverse().slice(0,2).join('/') : "Não informado";

        box.innerHTML = `
            <strong>Setor:</strong> ${func.area}<br>
            <strong>Aniversário:</strong> ${niver}<br>
            <strong>Status Day Off:</strong> ${statusFolga}
        `;
        box.style.display = "block";
    }
}