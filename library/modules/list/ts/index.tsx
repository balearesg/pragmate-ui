import React from 'react';

export /*bundle */ function List({items, className, index = 'id', Item}) {
	const output = items.map((item, index) => {
		<Item key={item[index]} item={item} />;
	});

	return <ul className={className}>{output}</ul>;
}
