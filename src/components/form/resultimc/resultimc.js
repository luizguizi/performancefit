import React, {useState} from "react";
import { View, Text } from "react-native";
import stylesResult from "./styleResult";

export default function ResultImc(props) {

    const [reset, setReset] = useState(false);

    let message;
    let color;
    let belowWeightColor = "#18FFB5";
    let normalWeightColor = "#20FF23";
    let aboveWeightColor = "#F2661F";
    let obeseColor = "#F44336";

    if (reset) {
        message = "";
        color = "black"
    }else if (props.resultImc < 18.5){
        message = "Abaixo do peso";
        color = belowWeightColor;
    }else if (props.resultImc >= 18.5 && props.resultImc < 25){
        message = "Peso Normal";
        color = normalWeightColor;
    }else if (props.resultImc >= 25 && props.resultImc < 30){
        message = "Acima do peso";
        color = aboveWeightColor;
    }else {
        message = "Obesa"
        color = obeseColor;
    }

    const handleReset = () => {
        setReset(true);

    }
    React.useEffect(()=> {
        setReset(false);
    }, [props.resultImc]);

return (

    <View>
        <View style={stylesResult.view}>
            <Text style={stylesResult.textTitle}>{props.messageResultImc}</Text>
            <Text style={stylesResult.text}>{props.resultImc}</Text>
        </View>
        {!reset && props.resultImc !== null && (
            <View style={stylesResult.viewCenter}>
                <Text style={[stylesResult.text,{color: color}]}>
                    {message}
                </Text>
             </View>   
        )}
    </View>
);
}

