import React from 'react';
import { FlatList, View } from 'react-native';
import {Button, Layout, Text} from '@ui-kitten/components';

import { MEALS } from '../data/dummy-data'
import { MealItem } from './MealItem';

export function MealsScreen({ route }) {
  const catId = route.params.categoryId;

const displayedMeals = MEALS.filter((mealItem)=>{
  return mealItem.categoryIds.indexOf(catId) >= 0;
});

const renderMealItem = (itemData) => {
  const item = itemData.item;
  const mealItemProps = {
    title: item.title,
    imageUrl: item.imageUrl,
    duration: item.duration,
    isGlutenFree: item.isGlutenFree,
    isVegan: item.isVegan,
    isVegetarian: item.isVegetarian,
    isLactoseFree: item.isLactoseFree,
  }
    
    
  return <MealItem  {...mealItemProps}   />
}

  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList data={displayedMeals}
      keyExtractor={(item) => item.id} 
      renderItem={renderMealItem}     
      />
    </Layout>
  );
}
