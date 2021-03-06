import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Product from './Product';

import '../styles/ListProducts.css';
import ButtonToTop from './ButtonToTop';

function ListProducts({ items, itemsFiltered }) {
	return (
		<section>
			<section className="cards">
				{itemsFiltered.length === 0
					? items.map((item) => <Product key={item.id} item={item} />)
					: itemsFiltered.map((item) => <Product key={item.id} item={item} />)}
			</section>
			<ButtonToTop />
		</section>
	);
}

const mapStateToProps = (state) => ({
	items: state.market.payload.products,
	itemsFiltered: state.market.payload.filteredProducts,
});

ListProducts.propTypes = {
	items: propTypes.arrayOf(propTypes.object).isRequired,
	itemsFiltered: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps)(ListProducts);
