function calculateModuleAverage(tdId, examId, coef) {
    if (!tdId) {
        const exam = parseFloat(document.getElementById(examId).value) || 0;
        return exam * coef;
    }
    const td = parseFloat(document.getElementById(tdId).value) || 0;
    const exam = parseFloat(document.getElementById(examId).value) || 0;
    const avg = (0.4 * td + 0.6 * exam);
    return avg * coef;
}

function calculateS5() {
    const modules = [
        { tdId: "s5m1td", examId: "s5m1exam", coef: 4 },
        { tdId: "s5m2td", examId: "s5m2exam", coef: 2 },
        { tdId: "s5m3td", examId: "s5m3exam", coef: 4 },
        { tdId: "s5m4td", examId: "s5m4exam", coef: 3 },
        { tdId: "s5m5td", examId: "s5m5exam", coef: 2 },
        { tdId: null, examId: "s5m6exam", coef: 1 }
    ];

    let totalWeightedScore = 0;
    let totalCoef = 0;

    modules.forEach(module => {
        const weightedScore = calculateModuleAverage(module.tdId, module.examId, module.coef);
        totalWeightedScore += weightedScore;
        totalCoef += module.coef;
    });

    const s5Avg = Math.min((totalWeightedScore / totalCoef).toFixed(2), 20);
    document.getElementById('s5Result').innerText = `S5 Average: ${s5Avg}`;
}

function calculateS6() {
    const modules = [
        { tdId: "s6m1td", examId: "s6m1exam", coef: 5 },
        { tdId: "s6m2td", examId: "s6m2exam", coef: 5 },
        { tdId: "s6m3td", examId: "s6m3exam", coef: 2 },
        { tdId: "s6m4td", examId: "s6m4exam", coef: 2 },
        { tdId: null, examId: "s6m5exam", coef: 2 }
    ];

    let totalWeightedScore = 0;
    let totalCoef = 0;

    modules.forEach(module => {
        const weightedScore = calculateModuleAverage(module.tdId, module.examId, module.coef);
        totalWeightedScore += weightedScore;
        totalCoef += module.coef;
    });

    const s6Avg = Math.min((totalWeightedScore / totalCoef).toFixed(2), 20);
    document.getElementById('s6Result').innerText = `S6 Average: ${s6Avg}`;
}

function calculateAnnual() {
    const s5Avg = parseFloat(document.getElementById('annualS5').value) || 0;
    const s6Avg = parseFloat(document.getElementById('annualS6').value) || 0;

    const annualAvg = Math.min(((s5Avg + s6Avg) / 2).toFixed(2), 20);
    document.getElementById('annualResult').innerText = `Annual Average: ${annualAvg}`;
}