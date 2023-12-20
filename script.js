//AND Gate Functionalities
{
    // Variables to store AND Input
    var ANDInput1 = false;
    var ANDInput2 = false;
    // Function to check AND conditions and display output
    function checkANDCondition() {
        var ANDresult = ANDInput1&&ANDInput2;
        if (ANDresult) {
            document.getElementById('AND_output_led').classList.add('blue-led-on')
        } else {
            document.getElementById('AND_output_led').classList.remove('blue-led-on') 
        }
    }
    //Event listener for AND Input
    //Input 1
    document.getElementById('AND_input_1').addEventListener('change', function() {
        ANDInput1 = this.checked;
        checkANDCondition();
    });
    //Input 2
    document.getElementById('AND_input_2').addEventListener('change', function() {
        ANDInput2 = this.checked;
        checkANDCondition();
    });
}

//OR Gate Functionalities
{
    // Variables to store OR Input
    var ORInput1 = false;
    var ORInput2 = false;
    // Function to check OR conditions and display output
    function checkORCondition() {
        var ORresult = ORInput1||ORInput2;
        if (ORresult) {
            document.getElementById('OR_output_led').classList.add('blue-led-on')
        } else {
            document.getElementById('OR_output_led').classList.remove('blue-led-on') 
        }
    }
    //Event listener for OR Input
    //Input 1
    document.getElementById('OR_input_1').addEventListener('change', function() {
        ORInput1 = this.checked;
        checkORCondition();
    });
    //Input 2
    document.getElementById('OR_input_2').addEventListener('change', function() {
        ORInput2 = this.checked;
        checkORCondition();
    });
}

//NOT Gate Functionalities
{
    // Variables to store NOT Input
    var NOTInput = false;
    // Function to check NOT conditions and display output
    function checkNOTCondition() {
        var NOTresult = !NOTInput;
        if (NOTresult) {
            document.getElementById('NOT_output_led').classList.add('blue-led-on')
        } else {
            document.getElementById('NOT_output_led').classList.remove('blue-led-on') 
        }
    }
    //Event listener for NOT Input
    //Input
    document.getElementById('NOT_input').addEventListener('change', function() {
        NOTInput = this.checked;
        checkNOTCondition();
    });
}

//NOR Gate Functionalities
{
    // Variables to store NOR Input
    var NORInput1 = false;
    var NORInput2 = false;
    // Function to check NOR conditions and display output
    function checkNORCondition() {
        var NORresult = !(NORInput1||NORInput2);
        if (NORresult) {
            document.getElementById('NOR_output_led').classList.add('blue-led-on')
        } else {
            document.getElementById('NOR_output_led').classList.remove('blue-led-on') 
        }
    }
    //Event listener for NOR Input
    //Input 1
    document.getElementById('NOR_input_1').addEventListener('change', function() {
        NORInput1 = this.checked;
        checkNORCondition();
    });
    //Input 2
    document.getElementById('NOR_input_2').addEventListener('change', function() {
        NORInput2 = this.checked;
        checkNORCondition();
    });
}

//NAND Gate Functionalities
{
    // Variables to store NAND Input
    var NANDInput1 = false;
    var NANDInput2 = false;
    // Function to check NAND conditions and display output
    function checkNANDCondition() {
        var NANDresult = !(NANDInput1&&NANDInput2);
        if (NANDresult) {
            document.getElementById('NAND_output_led').classList.add('blue-led-on')
        } else {
            document.getElementById('NAND_output_led').classList.remove('blue-led-on') 
        }
    }
    //Event listener for NAND Input
    //Input 1
    document.getElementById('NAND_input_1').addEventListener('change', function() {
        NANDInput1 = this.checked;
        checkNANDCondition();
    });
    //Input 2
    document.getElementById('NAND_input_2').addEventListener('change', function() {
        NANDInput2 = this.checked;
        checkNANDCondition();
    });
}

//XOR Gate Functionalities
{
    // Variables to store XOR Input
    var XORInput1 = false;
    var XORInput2 = false;
    // Function to check XOR conditions and display output
    function checkXORCondition() {
        var XORresult = XORInput1^XORInput2;
        if (XORresult) {
            document.getElementById('XOR_output_led').classList.add('blue-led-on')
        } else {
            document.getElementById('XOR_output_led').classList.remove('blue-led-on') 
        }
    }
    //Event listener for XOR Input
    //Input 1
    document.getElementById('XOR_input_1').addEventListener('change', function() {
        XORInput1 = this.checked;
        checkXORCondition();
    });
    //Input 2
    document.getElementById('XOR_input_2').addEventListener('change', function() {
        XORInput2 = this.checked;
        checkXORCondition();
    });
}

//XNOR Gate Functionalities
{
    // Variables to store XOR Input
    var XNORInput1 = false;
    var XNORInput2 = false;
    // Function to check XNOR conditions and display output
    function checkXNORCondition() {
        var XNORresult = !(XNORInput1^XNORInput2);
        if (XNORresult) {
            document.getElementById('XNOR_output_led').classList.add('blue-led-on')
        } else {
            document.getElementById('XNOR_output_led').classList.remove('blue-led-on') 
        }
    }
    //Event listener for XNOR Input
    //Input 1
    document.getElementById('XNOR_input_1').addEventListener('change', function() {
        XNORInput1 = this.checked;
        checkXNORCondition();
    });
    //Input 2
    document.getElementById('XNOR_input_2').addEventListener('change', function() {
        XNORInput2 = this.checked;
        checkXNORCondition();
    });
}

//Half Adder Functionalities
{
    // Variables to store Half Adder Input
    var HalfAdderInput1 = false;
    var HalfAdderInput2 = false;
    // Function to check Half Adder conditions and display output
    function checkHalfAdderCondition() {
        var HalfAdderSumResult = HalfAdderInput1^HalfAdderInput2;
        var HalfAdderCarryOutResult = HalfAdderInput1&&HalfAdderInput2;
        if (HalfAdderSumResult) {
            document.getElementById('half_adder_sum_output').classList.add('blue-led-on')
        } else {
            document.getElementById('half_adder_sum_output').classList.remove('blue-led-on') 
        }
        if (HalfAdderCarryOutResult) {
            document.getElementById('half_adder_carry_output').classList.add('blue-led-on')
        } else {
            document.getElementById('half_adder_carry_output').classList.remove('blue-led-on') 
        }
    }
    //Event listener for Full Adder Input
    //Input 1
    document.getElementById('half_adder_input_1').addEventListener('change', function() {
        HalfAdderInput1 = this.checked;
        checkHalfAdderCondition();
    });
    //Input 2
    document.getElementById('half_adder_input_2').addEventListener('change', function() {
        HalfAdderInput2 = this.checked;
        checkHalfAdderCondition();
    });
}

//Full Adder Functionalities
{
    // Variables to store Full Adder Input and Carry
    var FullAdderInput1 = false;
    var FullAdderInput2 = false;
    var FullAdderCarryIn = false;
    // Function to check Full Adder conditions and display output
    function checkFullAdderCondition() {
        var FullAdderSumResult = FullAdderInput1^FullAdderInput2^FullAdderCarryIn;
        var FullAdderCarryOutResult = (FullAdderInput1&&FullAdderInput2)||(FullAdderInput2&&FullAdderCarryIn)||(FullAdderCarryIn&&FullAdderInput1);
        if (FullAdderSumResult) {
            document.getElementById('full_adder_sum_output').classList.add('blue-led-on')
        } else {
            document.getElementById('full_adder_sum_output').classList.remove('blue-led-on') 
        }
        if (FullAdderCarryOutResult) {
            document.getElementById('full_adder_carry_output').classList.add('blue-led-on')
        } else {
            document.getElementById('full_adder_carry_output').classList.remove('blue-led-on') 
        }
    }
    //Event listener for Full Adder Input an4 Carry in
    //Input 1
    document.getElementById('full_adder_input_1').addEventListener('change', function() {
        FullAdderInput1 = this.checked;
        checkFullAdderCondition();
    });
    //Input 2
    document.getElementById('full_adder_input_2').addEventListener('change', function() {
        FullAdderInput2 = this.checked;
        checkFullAdderCondition();
    });
    //Carry in
    document.getElementById('full_adder_carry_in').addEventListener('change', function() {
        FullAdderCarryIn = this.checked;
        checkFullAdderCondition();
    });
}

//4-bit Full Adder Functionalities
{
    // Variables to store 4-bit Full Adder Input
    var FullAdderInputA1 = false;
    var FullAdderInputA2 = false;
    var FullAdderInputA3 = false;
    var FullAdderInputA4 = false;
    var FullAdderInputB1 = false;
    var FullAdderInputB2 = false;
    var FullAdderInputB3 = false;
    var FullAdderInputB4 = false;
    var FullAdderInput1CarryIn = false;
    var FullAdderInput2CarryIn = false;
    var FullAdderInput3CarryIn = false;
    var FullAdderInput4CarryIn = false;
    var FullAdderInput4CarryOut = false;
    // Function to check 4-bit Full Adder conditions and display output
    function check4bitFullAdderCondition() {
        var FullAdderInput1SumResult = FullAdderInputA1^FullAdderInputB1^FullAdderInput1CarryIn;
        
        var FullAdderInput2CarryIn = (FullAdderInputA1&&FullAdderInputB1)||(FullAdderInputB1&&FullAdderInput1CarryIn)||(FullAdderInput1CarryIn&&FullAdderInputA1);
        
        var FullAdderInput2SumResult = FullAdderInputA2^FullAdderInputB2^FullAdderInput2CarryIn;
        
        var FullAdderInput3CarryIn = (FullAdderInputA2&&FullAdderInputB2)||(FullAdderInputB2&&FullAdderInput2CarryIn)||(FullAdderInput2CarryIn&&FullAdderInputA2);
        
        var FullAdderInput3SumResult = FullAdderInputA3^FullAdderInputB3^FullAdderInput3CarryIn;
        
        var FullAdderInput4CarryIn = (FullAdderInputA3&&FullAdderInputB3)||(FullAdderInputB3&&FullAdderInput3CarryIn)||(FullAdderInput3CarryIn&&FullAdderInputA3);
        
        var FullAdderInput4SumResult = FullAdderInputA4^FullAdderInputB4^FullAdderInput4CarryIn;
        
        var FullAdderInput4CarryOut = (FullAdderInputA4&&FullAdderInputB4)||(FullAdderInputB4&&FullAdderInput4CarryIn)||(FullAdderInput4CarryIn&&FullAdderInputA4);
        
        if (FullAdderInput1SumResult) {
            document.getElementById('full_adder_sum_output_1').classList.add('blue-led-on')
        } else {
            document.getElementById('full_adder_sum_output_1').classList.remove('blue-led-on') 
        }
        if (FullAdderInput2SumResult) {
            document.getElementById('full_adder_sum_output_2').classList.add('blue-led-on')
        } else {
            document.getElementById('full_adder_sum_output_2').classList.remove('blue-led-on') 
        }
        if (FullAdderInput3SumResult) {
            document.getElementById('full_adder_sum_output_3').classList.add('blue-led-on')
        } else {
            document.getElementById('full_adder_sum_output_3').classList.remove('blue-led-on') 
        }
        if (FullAdderInput4SumResult) {
            document.getElementById('full_adder_sum_output_4').classList.add('blue-led-on')
        } else {
            document.getElementById('full_adder_sum_output_4').classList.remove('blue-led-on') 
        }
        if (FullAdderInput4CarryOut) {
            document.getElementById('full_adder_input_4_carry_output').classList.add('blue-led-on')
        } else {
            document.getElementById('full_adder_input_4_carry_output').classList.remove('blue-led-on') 
        }
    }
    //Event listener for 4-bit Full Adder Input
    //Input A1
    document.getElementById('full_adder_input_A1').addEventListener('change', function() {
        FullAdderInputA1 = this.checked;
        check4bitFullAdderCondition();
    });
    //Input B1
    document.getElementById('full_adder_input_B1').addEventListener('change', function() {
        FullAdderInputB1 = this.checked;
        check4bitFullAdderCondition();
    });
    //Input A2
    document.getElementById('full_adder_input_A2').addEventListener('change', function() {
        FullAdderInputA2 = this.checked;
        check4bitFullAdderCondition();
    });
    //Input B2
    document.getElementById('full_adder_input_B2').addEventListener('change', function() {
        FullAdderInputB2 = this.checked;
        check4bitFullAdderCondition();
    });
    //Input A3
    document.getElementById('full_adder_input_A3').addEventListener('change', function() {
        FullAdderInputA3 = this.checked;
        check4bitFullAdderCondition();
    });
    //Input B3
    document.getElementById('full_adder_input_B3').addEventListener('change', function() {
        FullAdderInputB3 = this.checked;
        check4bitFullAdderCondition();
    });
    //Input A4
    document.getElementById('full_adder_input_A4').addEventListener('change', function() {
        FullAdderInputA4 = this.checked;
        check4bitFullAdderCondition();
    });
    //Input B4
    document.getElementById('full_adder_input_B4').addEventListener('change', function() {
        FullAdderInputB4 = this.checked;
        check4bitFullAdderCondition();
    });
}

//Half Subtractor Functionalities
{
    // Variables to store Half Subtractor Input
    var HalfSubtractorInput1 = false;
    var HalfSubtractorInput2 = false;
    // Function to check Half Subtractor conditions and display output
    function checkHalfSubtractorCondition() {
        var HalfSubtractorDifferenceResult = HalfSubtractorInput1^HalfSubtractorInput2;
        var HalfSubtractorBorrowResult = (!HalfSubtractorInput1)&&HalfSubtractorInput2;
        if (HalfSubtractorDifferenceResult) {
            document.getElementById('half_subtractor_difference_output').classList.add('blue-led-on')
        } else {
            document.getElementById('half_subtractor_difference_output').classList.remove('blue-led-on') 
        }
        if (HalfSubtractorBorrowResult) {
            document.getElementById('half_subtractor_borrow_output').classList.add('blue-led-on')
        } else {
            document.getElementById('half_subtractor_borrow_output').classList.remove('blue-led-on') 
        }
    }
    //Event listener for Half Subtractor Input
    //Input 1
    document.getElementById('half_subtractor_input_1').addEventListener('change', function() {
        HalfSubtractorInput1 = this.checked;
        checkHalfSubtractorCondition();
    });
    //Input 2
    document.getElementById('half_subtractor_input_2').addEventListener('change', function() {
        HalfSubtractorInput2 = this.checked;
        checkHalfSubtractorCondition();
    });
}

//initial state
checkANDCondition();
checkORCondition();
checkNOTCondition();
checkNORCondition();
checkNANDCondition();
checkXORCondition();
checkXNORCondition();
checkHalfAdderCondition();
checkFullAdderCondition();
check4bitFullAdderCondition(); 