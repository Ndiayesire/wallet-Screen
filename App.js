import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,ScrollView, Switch} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';





export default function App() {
  

  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    
    <View style={styles.container}>
      
      <View style={{backgroundColor:"midnightblue", height : "45%", width:"100%",justifyContent:"center", alignItems:"center",}}>
      
      <Text style={{fontSize:40, color:"white", fontWeight:"900",position:'absolute',paddingBottom:180}}>95.000F</Text>
      <AntDesign name="setting" size={25} color="white"
      style={{position:'absolute',paddingBottom:210, paddingRight:320,fontWeight:"600"}}/>

    

      

      <Text>
      </Text>
      <Text>
      </Text>
      <Text>
      </Text>
      <Text>
      </Text>
      <Text>
      </Text>
      
     <View>
       
     </View>
     <Image 
     style={{height:150, width:150,backgroundColor:"white",marginTop:25}}
     source={{
              uri:
                'https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-new-technology-barcode-qr-code-vector-classic-qr-code-vector-black-png-image_1886136.jpg',
            }}/>

      </View>


    <View style={{flexDirection: 'row', justifyContent:"center",paddingTop:320,paddingLeft:25,position:'absolute',flex: 1,paddingLeft:375,}}>

        <View style={{position:'absolute',marginTop:326, height: 90, width: 322, backgroundColor: 'white',shadowColor: '#000',shadowOffset: {width: 0, height: 2},shadowOpacity: 0.2,shadowRadius: 4,borderBottomRightRadius:15,borderBottomLeftRadius:15,borderTopLeftRadius:15,borderTopRightRadius:15 }}>
        <AntDesign 
        style={{
          paddingLeft:8,
          paddingTop:24
        }}
        name="wifi" size={40} color="green"/>
        <Switch
    trackColor={{ false: "#767577", true: "green" }}
    thumbColor={isEnabled ? "white" : "#f4f3f4"}
    ios_backgroundColor="midnightblue"
    onValueChange={toggleSwitch}
    value={isEnabled}
    style={{position:'absolute', marginLeft:250,
    marginTop:29}}
    />

<Text style={{fontSize:16,position:'absolute',paddingLeft:70,
          paddingTop:38,color:"midnightblue",fontWeight:"600"}}>
          {isEnabled ? 'Vous etes en Ligne' : 'Vous etes Hors Ligne'}

          
 </Text>
     
        </View>
        

      </View>

      
      
    

   

     <View style={styles.cardBody}>
          <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            marginLeft:20,
            
            
          }}
        >

          
          <Text
            style={{
              
              color: "midnightblue",
              fontSize: 16,
              fontWeight: '600',
            }}
          >
           Dépot
          </Text>

          <Text
            style={{
              
              color: "midnightblue",
              paddingLeft: 268,
              fontSize: 16,
              fontWeight:'500',
              position:'absolute'
            }}
          >
            5000F
          </Text>
          
        </View>

        


        <Text
          style={{
            fontSize: 13,
            marginRight: -5,
            marginVertical: 8,
            color: "gray",
            fontWeight: '600',
            marginLeft:20
          }}
        >
         27 Février 2021 à 14:50
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            marginLeft:20,
            
            
          }}
        >
          <Text
            style={{
              
              color: "midnightblue",
              fontSize: 16,
              fontWeight: '600',
            }}
          >
            Retrait
          </Text>

          <Text
            style={{
              color: "midnightblue",
              paddingLeft: 268,
              fontSize: 16,
              fontWeight:'500',
              position:'absolute'
            }}
          >
            -6500F
          </Text>
          
        </View>

        


        <Text
          style={{
            fontSize: 13,
            marginRight: -5,
            marginVertical: 8,
            color: "gray",
            fontWeight: '600',
            marginLeft:20
          }}
        >
         27 Février 2021 à 14:50
        </Text>


        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            marginLeft:20,
            
            
          }}
        >
          <Text
            style={{
              
              color: "midnightblue",
              fontSize: 16,
              fontWeight: '600',
            }}
          >
            A Djibril Bathily 778474149
          </Text>

          <Text
            style={{
              
              color: "midnightblue",
              paddingLeft: 268,
              fontSize: 16,
              fontWeight:'500',
              position:'absolute'
            }}
          >
            170000F
          </Text>
          
        </View>

        


        <Text
          style={{
            fontSize: 13,
            marginRight: -5,
            marginVertical: 8,
            color: "gray",
            fontWeight: '600',
            marginLeft:20
          }}
        >
         27 Février 2021 à 14:50
        </Text>


        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            marginLeft:20,
            
            
          }}
        >
          <Text
            style={{
              
              color: "midnightblue",
              fontSize: 16,
              fontWeight: '600',
            }}
          >
            A Ndiaye Siré Kane 778673184
          </Text>

          <Text
            style={{
              
              color: "midnightblue",
              paddingLeft: 268,
              fontSize: 16,
              fontWeight:'500',
              position:'absolute'
            }}
          >
            15000F
          </Text>
          
        </View>

        


        <Text
          style={{
            fontSize: 13,
            marginRight: -5,
            marginVertical: 8,
            color: "gray",
            fontWeight: '600',
            marginLeft:20
          }}
        >
         27 Février 2021 à 14:50
        </Text>


        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            marginLeft:20,
            
            
          }}
        >
          <Text
            style={{
              
              color: "midnightblue",
              fontSize: 16,
              fontWeight: '600',
            }}
          >
            Retrait
          </Text>

          <Text
            style={{
              
              color: "midnightblue",
              paddingLeft: 268,
              fontSize: 16,
              fontWeight:'500',
              position:'absolute'
            }}
          >
            -15000F
          </Text>
          
        </View>

        


        <Text
          style={{
            fontSize: 13,
            marginRight: -5,
            marginVertical: 8,
            color: "gray",
            fontWeight: '600',
            marginLeft:20
          }}
        >
         27 Février 2021 à 14:50
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            marginLeft:20,
            
            
          }}
        >
          <Text
            style={{
              
              color: "midnightblue",
              fontSize: 16,
              fontWeight: '600',
            }}
          >
            Dépot
          </Text>

          <Text
            style={{
              
              color: "midnightblue",
              paddingLeft: 268,
              fontSize: 16,
              fontWeight:'500',
              position:'absolute'
            }}
          >
            4500F
          </Text>
          
        </View>

        


        <Text
          style={{
            fontSize: 13,
            marginRight: -5,
            marginVertical: 8,
            color: "gray",
            fontWeight: '600',
            marginLeft:20
          }}
        >
         27 Février 2021 à 14:50
        </Text>


        </View>

      
        
      
      
    </View>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  card: {
  	flexDirection: 'row',
  	 justifyContent: 'space-around',
  	 paddingTop:290,
  	 paddingLeft:36,
  	 position:'absolute',
  },
  cardBody: {
    
    backgroundColor: '#fff',
    marginTop: 80,
    marginLeft:10,
    marginRight:10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    position:'absolute',
    width:350,
    marginTop:440
  },

  cardBodyTop: {
    flexDirection: 'row',
  },
  cardLeftSide: {
    paddingHorizontal: 10,
    flex: 1,
  },
  
  Adresse: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 5,
  },

  type: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 4,
  },
  Avatar: {
    height: 50,
    width: 50,
    backgroundColor: 'gray',
    borderRadius: 0,
  },
  

  
  cardBodyBottom: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBottomTitle: {
    fontSize: 14,
    marginTop: 5,
  },
});
