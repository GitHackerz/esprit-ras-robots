import TeamModel from '../models/team.js';
import {emailRegistrationHtml, transporter} from "../utils/index.js";

const teamController = {
    //Get All
    async getTeams(req, res) {
        const teams = await TeamModel.find({});
        res.json(teams);
    },
    //Get By ID
    async getTeam(req, res) {
        const {id} = req.params;
        try {
            if (!id) {
                return res.status(400).json({
                    'error': 'Missing team id'
                });
            }
            let teamModel;
            const team = await teamModel.findById(id);
            if (!team) {
                return res.status(404).json({
                    'error': 'team not found'
                });
            }
            res.json(team);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                'error': error.message
            });
        }
    },
    //POST
    async createTeam(req, res) {
        const TeamBody = req.body;
        try {
            const existedTeam = TeamModel.findOne({email: TeamBody.email});
            if (existedTeam) {
                return res.status(400).json({
                    'error': 'Team already exists'
                });
            }

            const team = await TeamModel.create({
                ...TeamBody,
            });

            transporter.sendMail({
                from: `ESPRIT RAS ROBOTS 2.0 <${process.env.GOOGLE_EMAIL}>`,
                to: team.email,
                subject: 'ESPRIT RAS ROBOTS 2.0 Registration',
                html: emailRegistrationHtml(team)
            }, (error, info) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });


            res.json({
                message: 'Team created successfully',
                team
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                'error': 'Error while creating the team'
            });
        }
    },
    //PUT
    async updateTeam(req, res) {
        const {id} = req.params;
        const TeamBody = req.body;
        try {
            if (!id) {
                return res.status(400).json({
                    'error': 'Missing Team id'
                });
            }
            const Team = await TeamModel.findById(id);
            if (!Team) {
                return res.status(404).json({
                    'error': 'Team not found'
                });
            }
            const updatedTeam = await TeamModel.findByIdAndUpdate(id, {...TeamBody}, {new: true});
            res.json({
                'message': 'Team updated successfully',
                updatedTeam
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                'error': error.message
            });
        }
    },
    //DELETE
    async deleteTeam(req, res) {
        const {id} = req.params;
        try {
            if (!id) {
                return res.status(400).json({
                    'error': 'Missing Team id'
                });
            }
            const deletedTeam = await TeamModel.findById(id);
            if (!deletedTeam) {
                return res.status(404).json({
                    'error': 'Team not found'
                });
            }
            await deletedTeam.deleteOne();
            res.json({
                'message': 'Team deleted successfully',
                deletedTeam
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                'error': error.message
            });
        }
    }
}

export default teamController;