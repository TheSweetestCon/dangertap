import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import { Platform } from 'react-native';
import { Button } from '../Button';
import { DatePickerProps } from './types';
import theme from '../../global/theme';

export const DatePicker = ({ onDateSelected, label }: DatePickerProps) => {
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

        <View>

            {Platform.OS === 'ios' && (
                <View style={{
                            flexDirection: 'column',
                            gap: 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: 50,
                }}>
                    {label && <Text style={{color: theme.colors.dark_text, paddingLeft: 20}}>{label}</Text>}
                    
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={'date'}
                            onChange={onChange}
                            maximumDate={new Date()}
                            display='default'
                            accentColor={theme.colors.title}
                    />
                 
                </View>
            )}


            {Platform.OS === 'android' && (
                <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }} 
                >
                    <Button 
                        onPress={showDatePicker}  
                        label="Nascimento"
                    />
                </View>
            )} 
            {show && (
                
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        onChange={onChange}
                        maximumDate={new Date()}
                        minimumDate={new Date(1900, 0, 1)}
                    />
                )
            }
    </View>
    );
  };