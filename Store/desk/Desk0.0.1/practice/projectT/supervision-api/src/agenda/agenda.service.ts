import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Agenda } from './agenda.interface';
import { CreateAgendaDto } from './create-agenda.dto';
import { google } from 'googleapis';
import { Router } from 'express';
import { send } from 'process';


@Injectable()
export class AgendaService {
    constructor(@InjectModel('agenda') private readonly agendaModel: Model<any>) { }

    async create(createDto: CreateAgendaDto): Promise<Agenda> {
        const created = new this.agendaModel(createDto);
        return await created.save();
    }
    async findAll() {
        return await this.agendaModel.find({}).sort({ score: 'desc' }).exec();
    }

    async getMyAgenda(item) {

        return await this.agendaModel.find({ teacherId: item._id }).exec();
    }

    async getHistory(item) {

        return await this.agendaModel.find({ userId: item._id }).exec();
    }


    async put(item) {
        await this.agendaModel.update(
            { _id: item._id },
            { ...item },
        ).exec();
        console.log({ ...item })
        const startDate = item.startDate
        const endDate = item.endDate
        const MeetingTopic = item.MeetingTopic
        const { OAuth2 } = google.auth
        const oAuth2Client = new OAuth2(
            '266526321397-hrv9pqk41gltn4kfcre2u0mekf1i59ts.apps.googleusercontent.com',
            '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'
        )

        oAuth2Client.setCredentials({
            refresh_token:
                '1//04uy9HJSkjgPkCgYIARAAGAQSNwF-L9Ir0o5CdYTvgDbIm6MVlU3bDkJTYqHMTqh89QUVASswmjkztM8wbo4xnBP3ylMrahcoP4o',
        })
        const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })
        const event = {
            attendees: [
                {'email':'llltotolll2018@gmail.com'},
            ],
            summary: MeetingTopic,
            location: `Google Meetings`,
            description: ``,
            colorId: 1,
            start: {
                dateTime: new Date(startDate),
                timeZone: 'UTC',
            },
            end: {
                dateTime: new Date(endDate),
                timeZone: 'UTC',
            },
            reminders: {
                'useDefault': false,
                'overrides': [
                    { 'method': 'email', 'minutes': 24 * 60 },
                    { 'method': 'popup', 'minutes': 30 },
                ],
            },

        }

        calendar.freebusy.query(
            {
              resource: {
                timeZone: 'UTC',
                items: [{ id: 'primary' }],
              },
            },
            (err, res) => {
                return calendar.events.insert(
                  { calendarId: 'primary', resource: event },
                  err => {
                    if (err) return console.error('Error Creating Calender Event:', err)
                    return console.log('Calendar event successfully created.')
                  }
                )
            }
          )

        // return calendar.freebusy.query(
        //     {
        //         resource: {
        //             timeZone: 'UTC',
        //             items: [{ id: 'primary' }]
        //         }
        //     },

        //     calendar.events.insert(
        //         { calendarId: 'primary', resource: event },
        //         console.log('Calendar event successfully created.')

        //     ),

        // )


        //version 2
        // const GOOGLE_CLUEND_ID =
        //     '461912288462-j2gmr05vf7q4nsk8ma04mqls9qs31cd1.apps.googleusercontent.com'
        // const GOOGLE_CLUEND_SECRET =
        //     '1//0gw5ZkHK7vP8YCgYIARAAGBASNwF-L9IrhHQ71sIaRSXSeRxZd9F5yAHJVs4h-0mrFWoC9wLpl9vObomVfgNS6Cxfkujr_5JCKfU'
        // const REFRESH_TOKEN =
        //     '1//0gw5ZkHK7vP8YCgYIARAAGBASNwF-L9IrhHQ71sIaRSXSeRxZd9F5yAHJVs4h-0mrFWoC9wLpl9vObomVfgNS6Cxfkujr_5JCKfU'

        // const oauth2Client = new google.auth.OAuth2(
        //     GOOGLE_CLUEND_ID,
        //     GOOGLE_CLUEND_SECRET,
        // )

        // const startDate = item.startDate
        // const endDate = item.endDate
        // oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })
        // const calendar = google.calendar('v3')
        // const response = await calendar.events.insert({
        //     auth: oauth2Client,
        //     calendarId: 'promary',
        //     requestBody: {
        //         summary: 'Meeting',
        //         description: 'Google meeting',
        //         start: {
        //             dateTime: new Date(startDate),
        //         },
        //         end: {
        //             dateTime: new Date(endDate),
        //         }
        //     }
        // })
        // response



    }




    async findById(id) {
        return await this.agendaModel.find({ _id: id }).exec();
    }

    async removeById(id) {
        this.agendaModel.remove({ _id: id }).exec();
        return true;
    }
}
