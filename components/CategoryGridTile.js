import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

function CategoryGridTile({title,color,onPress}){

  return (
    <View style={[styles.gridItem,{backgroundColor: color}]}>
      <Pressable 
      android_ripple={{color: '#ccc'}} 
      style={styles.button}
      onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>  
        </View>
        
       </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,

    },
    button:{
        flex: 1,
    },
    innerContainer:{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
    }
})