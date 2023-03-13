import pandas as pd
import os
import warnings
warnings.simplefilter(action='ignore', category=FutureWarning)


class FinalModel:
    
    review_pos_dir = './assets/review_pos.csv'
    cosine_similarities_dir = './assets/cosine_similarities.csv'

    def __init__(self) -> None:
        if not os.path.exists(self.review_pos_dir):
            raise RuntimeError('No model')

        if not os.path.exists(self.cosine_similarities_dir):
            raise RuntimeError('No data')

        # if not os.path.exists('./assets/business_philly.csv'):
        #     raise RuntimeError('No data')

        self.review_pos = pd.read_csv(self.review_pos_dir)
        self.review_pos.set_index('business_id', inplace=True)
        self.indices = pd.Series(self.review_pos.index)
        self.cosine_similarities = pd.read_csv(
            self.cosine_similarities_dir, index_col=0)
        self.cosine_similarities = self.cosine_similarities.to_numpy()
        # self.business_philly = pd.read_csv("./assets/business_philly.csv")

    def recommend(self, business_ids, received, asking):
        num = len(business_ids)
        score_series = pd.Series()
        for name in business_ids:
            # Create a list to put top restaurants
            recommend_restaurants = []

            # Find the index of the hotel entered
            idx = self.indices[self.indices == name].index[0]
            # print(self.indices[self.indices == name].index)
            # idx = self.indices[self.indices == name].index

            # Find the restaurants with a similar cosine-sim value and order them from bigges number
            score_series = score_series.append(
                pd.Series(self.cosine_similarities[idx])).sort_values(ascending=False)

        # sort all cosine-sim values of visited restaurants
        score_series = score_series.sort_values(ascending=False)
        # print(score_series.iloc[:5])
        # Extract top 10 restaurant indexes with a similar cosine-sim value
        top10_indexes = list(score_series.iloc[num:].index)

        # business_id of the top 10 restaurants
        for each in top10_indexes:
            recommend_restaurants.append(list(self.review_pos.index)[each])

        return recommend_restaurants[min(received, len(recommend_restaurants) - 1): min(len(recommend_restaurants), received + asking)]


if __name__ == '__main__':
    # for test
    model = FinalModel()
    print(model.recommend(['WnT9NIzQgLlILjPT0kEcsQ',
                           'ENhzvzEbixDwE3f5G-shbg', '2o4CRQ-FreATtbnhlLKWew'], 0, 10))
