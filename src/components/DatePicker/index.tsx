import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import { Platform } from 'react-native';
import { Button } from '../Button';

export const DatePicker = ({ onDateSelected }: { onDateSelected: (date: any) => void }) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
  
    const onChange = (event: any, selectedDate: any) => {
        setShow(false);
        if(selectedDate) {
            const today = new Date()
            today.setHours(0,0,0,0)
            if (selectedDate > today){
                Alert.alert('Data inválida', 'A data não pode ser maior ou igual que a data atual')
            } else {
                setDate(selectedDate);
                onDateSelected(selectedDate)
            }
        }
      };

    const showDatePicker = () => {
        setShow(true); // Mostra o calendário
    };

  
  
    return (

        <View style={{
                width: '50%',
                alignItems: 'center', 
                justifyContent: 'center',
        }}>

            {Platform.OS === 'ios' && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    onChange={onChange}
                    maximumDate={new Date()}
                />
            )}


            {Platform.OS === 'android' &&   <Button onPress={showDatePicker}  label="Selecionar" />} 
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={'date'}
                onChange={onChange}
                maximumDate={new Date()}
                />)
            }
    </View>
    );
  };