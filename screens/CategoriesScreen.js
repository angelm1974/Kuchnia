import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

function renderCategoryItem(itemData) {
  return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}
  />;
}

export function CategoriesScreen () {
  return (
    <View style={{"backgroundColor": "#24180f"}}>
    <FlatList 
        data={CATEGORIES}
        keyExtractor={(item)=>item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        /></View>
  )
}
 

const styles = StyleSheet.create({})