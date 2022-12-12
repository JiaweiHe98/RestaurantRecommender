import numpy as np
import pandas as pd
import pickle
# from sklearn.neighbors import KNeighborsClassifier
import os.path

NONE_FEATURE = 3


class BaseModel:

    def __init__(self) -> None:
        if not os.path.exists('./assets/neigh.pkl'):
            raise RuntimeError('No model')

        if not os.path.exists('./assets/rest_final.csv'):
            raise RuntimeError('No data')

        self.data = pd.read_csv('./assets/rest_final.csv')
        self.columns = len(self.data.columns) - NONE_FEATURE

        self.id_to_idx = {id: idx for idx,
                          id in enumerate(self.data['business_id'])}

        with open('./assets/neigh.pkl', 'rb') as f:
            self.model = pickle.load(f)

    def recommend(self, business_ids, received, asking):
        dummys = np.zeros((len(business_ids), self.columns))

        for idx, id in enumerate(business_ids):

            dummys[idx] = self.data.iloc[self.id_to_idx[id], :-3].values.flatten()

        distances, idxs = self.model.kneighbors(np.array(dummys))

        visited_idx = set([self.id_to_idx[id] for id in business_ids])
        res = {}

        for i in range(len(business_ids)):
            cur_dist = distances[i]
            cur_idxs = idxs[i]

            for j in range(len(cur_dist)):

                if cur_idxs[j] in visited_idx:
                    continue

                if cur_idxs[j] not in res:
                    res[cur_idxs[j]] = []

                res[cur_idxs[j]].append(cur_dist[j])

        res_final = sorted([(key, sum(lst) / len(lst))
                           for key, lst in res.items()], key=lambda each: each[1])
        all_ids = [self.data.iloc[idx, -3] for idx, _ in res_final]
        return all_ids[min(received, len(all_ids) - 1): min(len(all_ids), received + asking)]


if __name__ == '__main__':
    # for test
    model = BaseModel()
    print(model.recommend(['WnT9NIzQgLlILjPT0kEcsQ',
                           'ENhzvzEbixDwE3f5G-shbg', '2o4CRQ-FreATtbnhlLKWew'], 0, 10))
