const calculate = (calc) => {
    let operands = calc.querySelectorAll(".jsCalcInputOperand");
    let result = calc.querySelector(".jsCalcInputResult");
    let type = calc.getAttribute("data-calc");

    let f, s, t, r; // Stands for: first, second, third and result.
    let title = calc.querySelector(".jsCalcTitle");
    if (title) {
        f = title.querySelector(".f");
        s = title.querySelector(".s");
        t = title.querySelector(".t");
        r = title.querySelector(".r");
    }

    let first = operands[0];
    let second = operands[1];
    let third = operands[2];

    let sum;

    // Bail early.
    if (!result) {
        return;
    }



    if (type === 'f1' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        if (f && s) {
            f.textContent = first;
            s.textContent = second;
        }

        sum = first / 100 * second;

        result.value = round(sum);

        return;
    }



    if (type === 'f2' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        if (f && s) {
            f.textContent = first;
            s.textContent = second;
        }

        sum = first / second * 100;

        result.value = round(sum);

        return;
    }



    if (type === 'f3' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        if (f && s) {
            f.textContent = first;
            s.textContent = second;
        }

        sum = (second - first) / first  * 100;

        result.value = round(sum);

        return;
    }



    if (type === 'f4' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        if (f && s) {
            f.textContent = first;
            s.textContent = second;
        }

        sum = first + (first * (second / 100));

        result.value = round(sum);

        return;
    }



    if (type === 'f5' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        if (f && s) {
            f.textContent = first;
            s.textContent = second;
        }

        sum = first - (first * (second / 100));

        result.value = round(sum);

        return;
    }



    if (type === 'f6' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        if (f && s) {
            f.textContent = first;
            s.textContent = second;
        }

        sum = first * 100 / second;

        result.value = round(sum);

        return;
    }



    if (type === 'f7' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        if (f && s) {
            f.textContent = first;
            s.textContent = second;
        }

        sum = first / (1 + (second / 100));

        result.value = round(sum);

        return;
    }



    if (type === 'f8' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        if (f && s) {
            f.textContent = first;
            s.textContent = second;
        }

        sum = first / (1 - (second / 100));

        result.value = round(sum);

        return;
    }
}

const round = (number, decimals = 2) => {
    return Number(Math.round(number+'e'+decimals)+'e-'+decimals);
}



let calcs = document.querySelectorAll(".jsCalc");
if (calcs && calcs.length > 0) {
    calcs.forEach(calc => {
        calc.querySelectorAll(".jsCalcInputOperand").forEach(input => input.addEventListener('input', () => {
            calculate(calc);
        }));
    });
}
