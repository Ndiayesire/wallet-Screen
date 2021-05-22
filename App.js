import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={{backgroundColor:"midnightblue", height : "45%", width:"100%",justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:40, color:"white", fontWeight:"900",position:'absolute',paddingBottom:120}}>16.000F</Text>
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


    <View style={{flexDirection: 'row', justifyContent:"center",paddingTop:320,paddingLeft:25,position:'absolute',flex: 1,}}>

        <View style={{ height: 95, width: 110, backgroundColor: 'white',shadowColor: '#000',shadowOffset: {width: 0, height: 2},shadowOpacity: 0.2,shadowRadius: 4,borderBottomLeftRadius:15,borderTopLeftRadius:15 }}>
        <AntDesign 
        style={{
          paddingLeft:30,
          paddingTop:22
        }}
        name="user" size={40} color="midnightblue"/>
        <Text style={{ color: "midnightblue",
              paddingLeft: 35,
              paddingTop: 9,
              fontSize: 16,
              fontWeight:'500',
            }}>Payer</Text>
        </View>
        <View style={{ height: 95, width: 110, backgroundColor: 'white',shadowColor: '#000',shadowOffset: {width: 0, height: 2},shadowOpacity: 0.2,shadowRadius: 4 }}>
          
        <AntDesign 
        style={{
          paddingLeft:30,
          paddingTop:22
        }}
        name="bulb1" size={40} color="#FF8C00"/>
        <Text style={{ color: "#FF8C00",
              paddingLeft: 24,
              paddingTop: 9,
              fontSize: 16,
              fontWeight:'500',
            }}>Factures</Text>
          </View>
        <View style={{height: 95, width: 110, backgroundColor: 'white',shadowColor: '#000',shadowOffset: {width: 0, height: 2},shadowOpacity: 0.2,shadowRadius: 4,borderBottomRightRadius:15,borderTopRightRadius:15 }}>
          
        <AntDesign 
        style={{
          paddingLeft:30,
          paddingTop:22
        }}
        name="mobile1" size={40} color="#87CEFA"/>
        <Text style={{ color: "#87CEFA",
              paddingLeft: 29,
              paddingTop: 9,
              fontSize: 16,
              fontWeight:'500',
            }}>Crédit</Text>
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
            Liberté 6 Place de l'indépendance
          </Text>

          <Text
            style={{
              
              color: "midnightblue",
              paddingLeft: 40,
              fontSize: 16,
              fontWeight:'500',
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
            Liberté 6 Place de l'indépendance
          </Text>

          <Text
            style={{
              
              color: "midnightblue",
              paddingLeft: 40,
              fontSize: 16,
              fontWeight:'500',
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
            Liberté 6 Place de l'indépendance
          </Text>

          <Text
            style={{
              
              color: "midnightblue",
              paddingLeft: 40,
              fontSize: 16,
              fontWeight:'500',
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
            Liberté 6 Place de l'indépendance
          </Text>

          <Text
            style={{
              
              color: "midnightblue",
              paddingLeft: 40,
              fontSize: 16,
              fontWeight:'500',
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
            Liberté 6 Place de l'indépendance
          </Text>

          <Text
            style={{
              
              color: "midnightblue",
              paddingLeft: 40,
              fontSize: 16,
              fontWeight:'500',
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
            Liberté 6 Place de l'indépendance
          </Text>

          <Text
            style={{
              
              color: "midnightblue",
              paddingLeft: 40,
              fontSize: 16,
              fontWeight:'500',
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
