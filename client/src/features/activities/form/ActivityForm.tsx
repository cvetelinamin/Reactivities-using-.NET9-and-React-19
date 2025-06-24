import { Box, Button, Paper, Typography } from '@mui/material'
import { useActivities } from '../../../lib/hooks/useActivities';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { activitySchema, type ActivitySchema } from '../../../lib/schemas/activitySchema';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from '../../../app/shared/components/TextInput';
import SelectInput from '../../../app/shared/components/SelectInput';
import { categoryOptions } from './categoryOptions';
import DateTimeInput from '../../../app/shared/components/DateTimeInput';
import LocationInput from '../../../app/shared/components/LocationInput';

export default function ActivityForm() {
    const { control, reset, handleSubmit } = useForm<ActivitySchema>({
        mode: 'onTouched',
        resolver: zodResolver(activitySchema)
    });
    const { id } = useParams();
    const { updateActivity, createActivity, activity, isLoadingActivity } = useActivities(id);

    useEffect(() => {
        if (activity) reset(activity);
    }, [activity, reset])

    const onSubmit = async (data: ActivitySchema) => {

        console.log(data)

        // if (activity) {
        //     data.id = activity.id;
        //     await updateActivity.mutateAsync(data as unknown as Activity);
        //     navigate(`/activities/${activity.id}`)
        // } else {
        //     createActivity.mutate(data as unknown as Activity, {
        //         onSuccess: (id) => {
        //             navigate(`/activities/${id}`)
        //         }
        //     });
        // }
    }

    if (isLoadingActivity) return <Typography>Loading...</Typography>

    return (
        <Paper sx={{ borderRadius: 3, padding: 3 }}>
            <Typography variant='h5' gutterBottom color='primary'>
                {activity ? 'Edit Activity' : 'Create Activity'}
            </Typography>
            <Box component='form' onSubmit={handleSubmit(onSubmit)} display='flex' flexDirection='column' gap={3}>
                <TextInput label='Title' control={control} name='title' />
                <TextInput label='Description' control={control} name='description' multiline rows={3} />
                <SelectInput
                    items={categoryOptions}
                    label='Category'
                    control={control}
                    name='category'
                />
                <DateTimeInput label='Date' control={control} name='date' />
                <LocationInput control={control} label='Enter the location' name='location' />


                <Box display='flex' justifyContent='end' gap={3}>
                    <Button onClick={() => navigate('/activities')} color='inherit'>Cancel</Button>
                    <Button
                        type='submit'
                        color='success'
                        variant='contained'
                        disabled={updateActivity.isPending || createActivity.isPending}
                    >Submit</Button>
                </Box>
            </Box>
        </Paper>
    )
}
