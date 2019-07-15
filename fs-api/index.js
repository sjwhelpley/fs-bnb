const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/user', require('./src/api/user.routes'));
app.use('/api/auth', require('./src/api/auth.routes'));
app.use('/api/listing', require('./src/api/listing.routes'));
app.use('/api/booking', require('./src/api/booking.routes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

