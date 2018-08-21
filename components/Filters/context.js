import React from 'react';
import Cookies from 'js-cookie';

const filters = [
    {
        label: 'Pencil',
        value: 'pencils',
    },
    {
        label: 'Ink',
        value: 'inks',
    },
    {
        label: 'Full Color',
        value: 'fullColor',
    },
];

const { Provider, Consumer } = React.createContext({
    filter: Cookies.get('filter') || filters[2].value,
});

class FiltersProvider extends React.Component {
    constructor() {
        super();

        this.state = {
            filter: Cookies.get('filter') || filters[2].value,
        };

        this.setFilter = this.setFilter.bind(this);
    }

    setFilter(index) {
        Cookies.set('filter', filters[index].value);

        this.setState({
            filter: filters[index].value,
        });
    }

    componentDidMount() {
        this.setState({
            filter: Cookies.get('filter'),
        });
    }

    render() {
        return (
            <Provider value={{
                filter: this.state.filter,
                setFilter: this.setFilter,
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export {
    Provider,
    Consumer,
    filters,
    FiltersProvider,
};
