import 'jquery';
import { requester } from 'requester';

const objectsRequester = function() {
    function getAllObjects(directory) {
        return requester().get(directory);
    }

    function getObjectsPage(directory, pageNumber) {
        return requester().get(`${directory}/${pageNumber}`)
    }

    function addNewObject(directory, objectData) {
        return requester().post(directory, objectData);
    }

    function getSpecificObject(directory, name) {
        const searchParams = {
            name: name
        };

        return requester().put(directory, searchParams);
    }

    function editSpecificObject(directory, name, info) {
        info['name'] = name;

        return requester().patch(directory, info);
    }

    return {
        getAllObjects,
        getObjectsPage,
        addNewObject,
        getSpecificObject,
        editSpecificObject
    };
};

export { objectsRequester };