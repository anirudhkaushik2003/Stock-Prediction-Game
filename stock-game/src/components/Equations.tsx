

const Equations = () => {

    // generate 2 random numbers
    var type = Math.floor(Math.random() * 5); // addition, subtraction, multiplication, division

    switch (type) {
        // if 1, addition
        case 1:
            var num1 = Math.floor(Math.random() * 100);
            var num2 = Math.floor(Math.random() * 100);
            var answer = num1 + num2;
            var operand = "+"
            break;

        // if 2, subtraction
        case 2:
            var num1 = Math.floor(Math.random() * 100);
            var num2 = Math.floor(Math.random() * 100);
            var answer = num1 - num2;
            var operand = "-"
            break;

        // if 3, multiplication
        case 3:
            var num1 = Math.floor(Math.random() * 20);
            var num2 = Math.floor(Math.random() * 20);
            var answer = num1 * num2;
            var operand = "*"
            break;

        // if 4, division
        case 4:
            var num1 = Math.floor(Math.random() * 10);
            var num2 = Math.floor(Math.random() * 10);
            var answer = num1;
            if(num2 == 0)
            {
                num2 = 1;
            }
            var operand = "/"
            num1 = num1 * num2;
            break;

        default:
            var num1 = Math.floor(Math.random() * 100);
            var num2 = Math.floor(Math.random() * 100);
            var answer = num1 + num2;
            var operand = "+"
            break;

    }

    // format question as string
    var question = num1 + " " + operand + " " + num2 + " " + "=" + " ?";

    // generate 3 random numbers that seem like the answer to confuse
    var rand1 = Math.floor(Math.random() * 200);
    var rand2 = Math.floor(Math.random() * 200);
    var rand3 = Math.floor(Math.random() * 200);

    // make their sign same as answer
    if(answer*rand1 < 0)
    {
        rand1 = rand1 * -1;
    }
    if(answer*rand2 < 0)
    {
        rand2 = rand2 * -1;
    }
    if(answer*rand3 < 0)
    {
        rand3 = rand3 * -1;
    }

    // make sure they are not the same as the answer
    while (rand1 == answer) {
        rand1 = Math.floor(Math.random() * 100);
        if(answer*rand1 < 0)
        {
            rand1 = rand1 * -1;
        
        }
    }
    while (rand2 == answer) {
        rand2 = Math.floor(Math.random() * 100);
        if(answer*rand2 < 0)
        {
            rand2 = rand2 * -1;
        
        }

    }
    while (rand3 == answer) {
        rand3 = Math.floor(Math.random() * 100);
        if(answer*rand3 < 0)
        {
            rand3 = rand3 * -1;
        
        }
    }

    // make sure they are all different

    while (rand1 == rand2) {
        rand2 = Math.floor(Math.random() * 100);
        if(answer*rand2 < 0)
        {
            rand2 = rand2 * -1;
        
        }
    }
    while (rand1 == rand3) {
        rand3 = Math.floor(Math.random() * 100);
        if(answer*rand3 < 0)
        {
            rand3 = rand3 * -1;
        
        }
    }

    while (rand2 == rand3) {
        rand3 = Math.floor(Math.random() * 100);
        if(answer*rand3 < 0)
        {
            rand3 = rand3 * -1;
        
        }
    }


    // return questiom, answer, and 3 random answers
    return [question, answer, rand1, rand2, rand3];



};

export default Equations;