import { Button, Grid } from '@mui/material';

const OrderItem = ({
	id,
	name,
	date,
	shipTo,
	paymentMethod,
	amount,
	onSelectOrder,
	onDeleteSelectedOrder,
	isSelected,
}) => (
	<Grid
		container
		sx={{
			borderTop: '2px solid #e5e5e5',
			padding: '10px 0',
			background: isSelected ? '#f6f6f6' : '',
		}}
	>
		<Grid xs={1} item>
			{id}
		</Grid>
		<Grid xs={1.8} item>
			{date}
		</Grid>
		<Grid xs={1.8} item>
			{name}
		</Grid>
		<Grid xs={1.8} item>
			{shipTo}
		</Grid>
		<Grid xs={1.8} item>
			{paymentMethod}
		</Grid>
		<Grid xs={1.8} item>
			{amount}
		</Grid>
		<Grid xs={1.2} item>
			{!isSelected && <Button onClick={() => onSelectOrder(+id)}>add</Button>}
			{isSelected && (
				<Button onClick={() => onDeleteSelectedOrder(+id)}>remove</Button>
			)}
		</Grid>
	</Grid>
);

export default OrderItem;
