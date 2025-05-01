import { Schema, model } from 'mongoose';

const ReviewSchema = new Schema({
  nome: String,
  email: String,
  nota: Number,
  reviewText: String,
  treinamentoId: String,
}, {
  timestamps: true
});

export default model('Review', ReviewSchema);
