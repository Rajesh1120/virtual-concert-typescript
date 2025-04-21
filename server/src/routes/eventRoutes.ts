// import express, { Request, Response } from 'express';
// import { authenticateToken } from '../middleware/auth';
// import User from '../models/User';
// import EventToken from '../models/EventToken';

// const router = express.Router();

// interface AuthRequest extends Request {
//   user?: {
//     id: string;
//   };
// }

// // Store event token
// router.post('/token', authenticateToken, async (req: AuthRequest, res: Response): Promise<void> => {
//   try {
//     const userId = req.user?.id;
//     if (!userId) {
//       res.status(401).json({ message: 'User not authenticated' });
//       return;
//     }

//     const { eventId, token } = req.body;
//     if (!eventId || !token) {
//       res.status(400).json({ message: 'Event ID and token are required' });
//       return;
//     }

//     // Create new event token
//     const eventToken = new EventToken({
//       userId,
//       eventId,
//       token,
//       isActive: true
//     });

//     await eventToken.save();

//     // Add token reference to user
//     const user = await User.findById(userId);
//     if (!user) {
//       res.status(404).json({ message: 'User not found' });
//       return;
//     }

//     user.eventTokens = user.eventTokens || [];
//     user.eventTokens.push(eventToken._id);
//     await user.save();

//     res.status(200).json({ message: 'Event token stored successfully' });
//   } catch (error) {
//     console.error('Error storing event token:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Cancel event token
// router.delete('/token/:eventId', authenticateToken, async (req: AuthRequest, res: Response): Promise<void> => {
//   try {
//     const userId = req.user?.id;
//     if (!userId) {
//       res.status(401).json({ message: 'User not authenticated' });
//       return;
//     }

//     const { eventId } = req.params;

//     // Find and deactivate the token
//     const eventToken = await EventToken.findOne({
//       userId,
//       eventId,
//       isActive: true
//     });

//     if (!eventToken) {
//       res.status(404).json({ message: 'Event token not found' });
//       return;
//     }

//     eventToken.isActive = false;
//     await eventToken.save();

//     res.status(200).json({ message: 'Event token cancelled successfully' });
//   } catch (error) {
//     console.error('Error cancelling event token:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Get user's active event tokens
// router.get('/tokens', authenticateToken, async (req: AuthRequest, res: Response): Promise<void> => {
//   try {
//     const userId = req.user?.id;
//     if (!userId) {
//       res.status(401).json({ message: 'User not authenticated' });
//       return;
//     }

//     const activeTokens = await EventToken.find({
//       userId,
//       isActive: true
//     });

//     res.status(200).json(activeTokens);
//   } catch (error) {
//     console.error('Error fetching event tokens:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// export default router; 