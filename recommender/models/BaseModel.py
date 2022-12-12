import pandas as pd
import pickle
# from sklearn.neighbors import KNeighborsClassifier
import os.path


class BaseModel:

    def __init__(self) -> None:
        if not os.path.exists('./assets/knn.pkl'):
            raise RuntimeError('No model')

        if not os.path.exists('./assets/rest_final.csv'):
            raise RuntimeError('No data')

        self.data = pd.read_csv('./assets/rest_final.csv', index_col=0)
        self.id_to_idx = {id: idx for idx,
                          id in enumerate(self.data['business_id'])}

        with open('./assets/knn.pkl', 'rb') as f:
            self.model = pickle.load(f)

    def recommend_one(self, business_id, length):

        dummy = self.data.iloc[self.id_to_idx[business_id]:, :-3]
        recommendations = self.model.kneighbors(dummy, length)
        print(recommendations[0].shape)

        # self.model.kneighbors()

    # def recommend(bussiness_id):


model = BaseModel()
model.recommend_one('MTSW4McQd7CbVtyjqoe9mw', 20)
