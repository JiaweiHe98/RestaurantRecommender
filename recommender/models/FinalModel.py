import pandas as pd
import os

review_pos = pd.read_csv("./assets/review_pos.csv")
review_pos.set_index('business_id', inplace=True)
indices = pd.Series(review_pos.index)
cosine_similarities = pd.read_csv("./assets/cosine_similarities.csv", index_col=0)
cosine_similarities = cosine_similarities.to_numpy()
business_philly = pd.read_csv("./assets/business_philly.csv")

def recommender(names, cosine_similarities = cosine_similarities):
    num = len(names)
    score_series = pd.Series()
    for name in names:
      # Create a list to put top restaurants
      recommend_restaurant = []
      
      # Find the index of the hotel entered
      idx = indices[indices == name].index[0]
      # idx = indices[indices == name].index
      print(idx)
      
      # Find the restaurants with a similar cosine-sim value and order them from bigges number
      score_series = score_series.append(pd.Series(cosine_similarities[idx])).sort_values(ascending=False)
      
      
    # sort all cosine-sim values of visited restaurants
    score_series = score_series.sort_values(ascending=False)
    # print(score_series.iloc[:5])
    # Extract top 10 restaurant indexes with a similar cosine-sim value
    top10_indexes = list(score_series.iloc[num:].index)

    # business_id of the top 10 restaurants
    for each in top10_indexes:
        recommend_restaurant.append(list(review_pos.index)[each])
     
    
    return recommend_restaurant


def recommand_process(visited_restaurant_id):
    
    # visited_id = business_philly[business_philly['name'].isin(visited_restaurant)]['business_id'].tolist()

    recommend_id = recommender(visited_restaurant_id)
    # print(recommend_id)

    # recommend_restaurant = business_philly[business_philly['business_id'].isin(recommend_id)][['business_id','name','address','stars','categories','hours']]

    # print(recommend_restaurant)
    return recommend_id[:10]

if __name__ == '__main__':
    visited_restaurant_id = ['bTve2mwLk5Zc01vRKqc2KQ', 'Njv2-eMDyGEWEPEOVonwsA']
    recommand_process(visited_restaurant_id)