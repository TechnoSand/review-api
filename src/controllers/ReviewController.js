import Review from '../models/Review.js';

class ReviewController {

  async store(req, res) {
    const { nome, email, nota, reviewText, treinamentoId } = req.body;

    const review = await Review.create({
      nome,
      email,
      nota,
      reviewText,
      treinamentoId,
    });

    return res.status(201).json(review);
  }

  async getAll(req, res) {
    const reviews = await Review.find().sort({ createdAt: -1 });
    return res.json(reviews);
  }

  async showByTreinamento(req, res) {
    const { treinamentoId } = req.params;

    const reviews = await Review.find({ treinamentoId }).sort({ createdAt: -1 });

    return res.json(reviews);
  }

  async destroyTreinamento(req, res){
    const { treinamentoId } = req.params;

    await Review.deleteMany({ treinamentoId });

    return res.status(200).json({ message: 'Reviews deleted successfully.' });
  }

}

export default new ReviewController();
