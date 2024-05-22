const $ = {
    name: 'alizoka',
    sortByPriorityModule: (array) => {
        array.sort((a, b) => {
           if(!a.priority){
            console.log(a.name + 'has no priority')
            return
           }
            if (!a.hasOwnProperty('priority')) {
                return 1;
            } else if (!b.hasOwnProperty('priority')) {
                return -1;
            } else {
                return a.priority - b.priority;
            }
        });
        return array;
    },

}

export default $