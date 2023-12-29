// Helper function to display result on the webpage
function displayResult(result, elementId) {
    var element = document.getElementById(elementId);
    if (result) {
        element.classList.add('blue-led-on');
    } else {
        element.classList.remove('blue-led-on');
    }
}

//AND Gate Functionalities
{
    // Variables to store AND Input
    var ANDInput1 = false;
    var ANDInput2 = false;
    // Function to check AND conditions and display output
    function checkANDCondition() {
        var ANDresult = ANDInput1&&ANDInput2;
        displayResult(ANDresult, 'AND_output_led');
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
        displayResult(ORresult, 'OR_output_led');
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
        displayResult(NOTresult, 'NOT_output_led');
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
        displayResult(NORresult, 'NOR_output_led');
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
        displayResult(NANDresult, 'NAND_output_led');
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
        displayResult(XORresult, 'XOR_output_led');
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
        displayResult(XNORresult, 'XNOR_output_led');
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
        displayResult(HalfAdderSumResult, 'half_adder_sum_output');
        displayResult(HalfAdderCarryOutResult, 'half_adder_carry_output'); 
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
        displayResult(FullAdderSumResult, 'full_adder_sum_output');
        displayResult(FullAdderCarryOutResult, 'full_adder_carry_output');
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
        
        displayResult(FullAdderInput1SumResult, 'full_adder_sum_output_1');
        displayResult(FullAdderInput2SumResult, 'full_adder_sum_output_2');
        displayResult(FullAdderInput3SumResult, 'full_adder_sum_output_3');
        displayResult(FullAdderInput4SumResult, 'full_adder_sum_output_4');
        displayResult(FullAdderInput4CarryOut, 'full_adder_input_4_carry_output');
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
        displayResult(HalfSubtractorDifferenceResult, 'half_subtractor_difference_output')
        displayResult(HalfSubtractorBorrowResult, 'half_subtractor_borrow_output');
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

//Full Suntractor Functionalities
{
    // Variables to store Full Subtractor Input and Carry
    var FullSubtractorInput1 = false;
    var FullSubtractorInput2 = false;
    var FullSubtractorBorrowIn = false;
    // Function to check Full Suntractor conditions and display output
    function checkFullSubtractorCondition() {
        var FullSubtractorDifferenceResult = FullSubtractorInput1^FullSubtractorInput2^FullSubtractorBorrowIn;

        var FullSubtractorBorrowOutResult = ((!FullSubtractorInput1)&&FullSubtractorInput2)||(FullSubtractorBorrowIn&&((!FullSubtractorInput1)||FullSubtractorInput2));

        displayResult(FullSubtractorDifferenceResult, 'full_subtractor_difference_output');
        displayResult(FullSubtractorBorrowOutResult, 'full_subtractor_borrow_output');
    }
    //Event listener for Full Subtractor Input and Carry in
    //Input 1
    document.getElementById('full_subtractor_input_1').addEventListener('change', function() {
        FullSubtractorInput1 = this.checked;
        checkFullSubtractorCondition();
    });
    //Input 2
    document.getElementById('full_subtractor_input_2').addEventListener('change', function() {
        FullSubtractorInput2 = this.checked;
        checkFullSubtractorCondition();
    });
    //Borrow In
    document.getElementById('full_subtractor_borrow_in').addEventListener('change', function() {
        FullSubtractorBorrowIn = this.checked;
        checkFullSubtractorCondition();
    });
}

//4-bit Full Subtractor Functionalities
{
    // Variables to store 4-bit Full Subtractor Input
    var FullSubtractorInputA1 = false;
    var FullSubtractorInputA2 = false;
    var FullSubtractorInputA3 = false;
    var FullSubtractorInputA4 = false;
    var FullSubtractorInputB1 = false;
    var FullSubtractorInputB2 = false;
    var FullSubtractorInputB3 = false;
    var FullSubtractorInputB4 = false;
    var FullSubtractorInput1BorrowIn = false;
    var FullSubtractorInput2BorrowIn = false;
    var FullSubtractorInput3BorrowIn = false;
    var FullSubtractorInput4BorrowIn = false;
    var FullSubtractorInput4BorrowOut = false;
    // Function to check 4-bit Full Subtractor conditions and display output
    function check4bitFullSubtractorCondition() {
        var FullSubtractorInput1DifferenceResult = (FullSubtractorInputA1^FullSubtractorInputB1)^FullSubtractorInput1BorrowIn;
        
        var FullSubtractorInput2BorrowIn = ((!FullSubtractorInputA1)&&FullSubtractorInputB1)||(FullSubtractorInput1BorrowIn&&((!FullSubtractorInputA1)||FullSubtractorInputB1));
        
        var FullSubtractorInput2DifferenceResult = (FullSubtractorInputA2^FullSubtractorInputB2)^FullSubtractorInput2BorrowIn;
        
        var FullSubtractorInput3BorrowIn = ((!FullSubtractorInputA2)&&FullSubtractorInputB2)||(FullSubtractorInput2BorrowIn&&((!FullSubtractorInputA2)||FullSubtractorInputB2));
        
        var FullSubtractorInput3DifferenceResult = (FullSubtractorInputA3^FullSubtractorInputB3)^FullSubtractorInput3BorrowIn;
        
        var FullSubtractorInput4BorrowIn = ((!FullSubtractorInputA3)&&FullSubtractorInputB3)||(FullSubtractorInput3BorrowIn&&((!FullSubtractorInputA3)||FullSubtractorInputB3));
        
        var FullSubtractorInput4DifferenceResult = (FullSubtractorInputA4^FullSubtractorInputB4)^FullSubtractorInput4BorrowIn;
        
        var FullSubtractorInput4BorrowOut = ((!FullSubtractorInputA4)&&FullSubtractorInputB4)||(FullSubtractorInput4BorrowIn&&((!FullSubtractorInputA4)||FullSubtractorInputB4));
        
        displayResult(FullSubtractorInput1DifferenceResult, 'full_subtractor_difference_output_1');
        displayResult(FullSubtractorInput2DifferenceResult, 'full_subtractor_difference_output_2');
        displayResult(FullSubtractorInput3DifferenceResult, 'full_subtractor_difference_output_3');
        displayResult(FullSubtractorInput4DifferenceResult, 'full_subtractor_difference_output_4');
        displayResult(FullSubtractorInput4BorrowOut, 'full_subtractor_input_4_borrow_output');
    }
    //Event listener for 4-bit Full Subtractor Input
    //Input A1
    document.getElementById('full_subtractor_input_A1').addEventListener('change', function() {
        FullSubtractorInputA1 = this.checked;
        check4bitFullSubtractorCondition();
    });
    //Input B1
    document.getElementById('full_subtractor_input_B1').addEventListener('change', function() {
        FullSubtractorInputB1 = this.checked;
        check4bitFullSubtractorCondition();
    });
    //Input A2
    document.getElementById('full_subtractor_input_A2').addEventListener('change', function() {
        FullSubtractorInputA2 = this.checked;
        check4bitFullSubtractorCondition();
    });
    //Input B2
    document.getElementById('full_subtractor_input_B2').addEventListener('change', function() {
        FullSubtractorInputB2 = this.checked;
        check4bitFullSubtractorCondition();
    });
    //Input A3
    document.getElementById('full_subtractor_input_A3').addEventListener('change', function() {
        FullSubtractorInputA3 = this.checked;
        check4bitFullSubtractorCondition();
    });
    //Input B3
    document.getElementById('full_subtractor_input_B3').addEventListener('change', function() {
        FullSubtractorInputB3 = this.checked;
        check4bitFullSubtractorCondition();
    });
    //Input A4
    document.getElementById('full_subtractor_input_A4').addEventListener('change', function() {
        FullSubtractorInputA4 = this.checked;
        check4bitFullSubtractorCondition();
    });
    //Input B4
    document.getElementById('full_subtractor_input_B4').addEventListener('change', function() {
        FullSubtractorInputB4 = this.checked;
        check4bitFullSubtractorCondition();
    });
}

//2x1 Multiplexer Functionalities
{
    // Variables to store 2x1 Multiplexer Input
    var Multiplexer2x1Input1 = false;
    var Multiplexer2x1Input2 = false;
    var Multiplexer2x1SelectionLineInput1 = false;
    // Function to check 2x1 Multiplexer conditions and display output
    function check2x1MultiplexerCondition() {
        var Multiplexer2x1Result = ((!Multiplexer2x1SelectionLineInput1)&&Multiplexer2x1Input1)||(Multiplexer2x1SelectionLineInput1&&Multiplexer2x1Input2);
        displayResult(Multiplexer2x1Result, '2x1_multiplexer_output')
    }
    //Event listener for 2x1 Multiplexer Input
    //Input 1
    document.getElementById('2x1_multiplexer_input_1').addEventListener('change', function() {
        Multiplexer2x1Input1 = this.checked;
        check2x1MultiplexerCondition();
    });
    //Input 2
    document.getElementById('2x1_multiplexer_input_2').addEventListener('change', function() {
        Multiplexer2x1Input2 = this.checked;
        check2x1MultiplexerCondition();
    });
    //Selection Line
    document.getElementById('2x1_multiplexer_selection_line_input_1').addEventListener('change', function() {
        Multiplexer2x1SelectionLineInput1 = this.checked;
        check2x1MultiplexerCondition();
    });
}

//4x1 Multiplexer Functionalities
{
    // Variables to store 4x1 Multiplexer Input
    var Multiplexer4x1Input1 = false;
    var Multiplexer4x1Input2 = false;
    var Multiplexer4x1Input3 = false;
    var Multiplexer4x1Input4 = false;
    var Multiplexer4x1SelectionLineInput1 = false;
    var Multiplexer4x1SelectionLineInput2 = false;
    // Function to check 4x1 Multiplexer conditions and display output
    function check4x1MultiplexerCondition() {
        var Multiplexer2x1Result = ((!Multiplexer4x1SelectionLineInput1)&&(!Multiplexer4x1SelectionLineInput2)&&Multiplexer4x1Input1)||((!Multiplexer4x1SelectionLineInput1)&&Multiplexer4x1SelectionLineInput2&&Multiplexer4x1Input2)||(Multiplexer4x1SelectionLineInput1&&(!Multiplexer4x1SelectionLineInput2)&&Multiplexer4x1Input3)||(Multiplexer4x1SelectionLineInput1&&Multiplexer4x1SelectionLineInput2&&Multiplexer4x1Input4)
        displayResult(Multiplexer2x1Result, '4x1_multiplexer_output')
    }
    //Event listener for 4x1 Multiplexer Input
    //Input 1
    document.getElementById('4x1_multiplexer_input_1').addEventListener('change', function() {
        Multiplexer4x1Input1 = this.checked;
        check4x1MultiplexerCondition();
    });
    //Input 2
    document.getElementById('4x1_multiplexer_input_2').addEventListener('change', function() {
        Multiplexer4x1Input2 = this.checked;
        check4x1MultiplexerCondition();
    });
    //Input 3
    document.getElementById('4x1_multiplexer_input_3').addEventListener('change', function() {
        Multiplexer4x1Input3 = this.checked;
        check4x1MultiplexerCondition();
    });
    //Input 4
    document.getElementById('4x1_multiplexer_input_4').addEventListener('change', function() {
        Multiplexer4x1Input4 = this.checked;
        check4x1MultiplexerCondition();
    });
    //Selection Line
    document.getElementById('4x1_multiplexer_selection_line_input_1').addEventListener('change', function() {
        Multiplexer4x1SelectionLineInput1 = this.checked;
        check4x1MultiplexerCondition();
    });
    document.getElementById('4x1_multiplexer_selection_line_input_2').addEventListener('change', function() {
        Multiplexer4x1SelectionLineInput2 = this.checked;
        check4x1MultiplexerCondition();
    });
}

//initial state
{
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
    checkHalfSubtractorCondition();
    check4bitFullSubtractorCondition();
    check4x1MultiplexerCondition();
}