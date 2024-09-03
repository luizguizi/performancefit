import { useState } from "react";
import React from "react";

import { View, Text, TextInput, Button, TouchableOpacity, Keyboard} from "react-native";
import ResultImc from "./resultimc";
import stylesForm from "../formsStyle";

export default function From(){
    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [messageImc, setMessageImc] = useState(null);
    const [resultImc, setResultImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [pesoIdeal, setPesoIdeal] = useState(null);

const imcCalculator = ()=> {
    // verificar se altura e peso foram preenchidos
    if(altura && peso){
        const alturaMetros = parseFloat(altura.replace(",","."));
        const pesoKg = parseFloat(peso.replace("kg",""));
        const imc = pesoKg / (alturaMetros * alturaMetros );
        setResultImc(imc.toFixed(2));
        setMessageImc("Seu IMC é: ");
        Keyboard.dismiss();
        setPesoIdeal(pesoIdeal)
    }else{
        setResultImc(null);
        setMessageImc("Por favor, preencha a altura e o peso!");
        setPesoIdeal(null)
    }

 

};

const handleReset = () => {
    setAltura(null)
    setPeso(null)
    setMessageImc(null)
    setResultImc(null)
}
    
    return(
        <View style={stylesForm.formContext}> 
        <View>
            <View style={stylesForm.formTextAltura}>
                <Text style={stylesForm.formText}>Altura</Text>
            </View>
            <View style={stylesForm.larguraTela}>
                <TextInput 
                style={stylesForm.input}
                placeholder='Ex 1.80'
                keyboardType='numeric'
                onChangeText={setAltura}
                value={altura}
                
                />
            </View>
            <View style={stylesForm.formTextAltura}>
                <Text style={stylesForm.formText}>Peso</Text>
            </View>
            <View>
                <TextInput 
                style={stylesForm.input}
                placeholder="Ex. 75.0"
                keyboardType="numeric"
                onChangeText={setPeso}
                value={peso}
                />
            </View>
            {resultImc !== null && (
           <TouchableOpacity
            style={[stylesForm.buttoncss, stylesForm.buttonContainer]}
            onPress={handleReset}
           >
            <Text style={stylesForm.buttonText}>Reiniciar</Text>
           </TouchableOpacity>
        )}
      
            {resultImc === null && (
                     <TouchableOpacity
                     style={[stylesForm.buttoncss, stylesForm.buttonContainer]}
                     onPress={imcCalculator}
                     >
                         <Text style={stylesForm.buttonText}>Calcular Imc</Text>
                     </TouchableOpacity>
            )}
            </View>
            
        <ResultImc messageResultImc={messageImc} resultImc={resultImc} />
      
      
        </View>
    );
}