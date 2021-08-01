import React from 'react'
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Home() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Container>
                <h1>TRICK OR CHEAT</h1>
                <h2>
                    How to Eat Whatever You
                    Want on Halloween
                    (and Get Away with It)
                </h2>
                <h3>
                    HOLIDAY SPECIAL: Save up to 40% on your bundle
                    ON THIS PAGE ONLY
                </h3>
                <p>
                    Halloween may not seem as “heavy” as
                    other holidays when it comes to food...
                    ... but don’t let that fool you.
                    If you’re going to indulge on Halloween,
                    there are some things to be aware of.
                    This short page will help you understand
                    how to “cheat” this week—and not feel horrible.
                </p>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {/* START MUI Card Turn Sugary Toxins */}
                    <Card className={classes.root}>
                        <CardHeader
                            title="Turn Sugary Toxins Into
                    Super Nutrients"
                            subheader="Learn about P3-OM"
                        />
                        <CardMedia
                            square
                            className={classes.media}
                            imageUrl= "https://www.dropbox.com/sh/ize8vkw71hok350/AAAnojrq5MmHmlxL-97pPmZya?dl=0&preview=P3-OM+US+120-FRONT.6.png"
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                You already know sugar is toxic.
                                It spikes blood sugar, warps your
                                insulin...
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    You already know sugar is toxic.
                                    It spikes blood sugar, warps your
                                    insulin (and other hormones),
                                    feeds candida, and can be easily
                                    converted into fat.
                                </Typography>
                                <Typography paragraph>
                                    But if you have an abundance of good
                                    bacteria in your gut and while you’re
                                    consuming the sugar—the bacteria will
                                    eat most of it up before it does damage.
                                    Which means, instead of a toxin—the sugar
                                    you consume becomes a growth accelerator
                                    for your probiotics.
                                </Typography>
                                <Typography paragraph>
                                    I’ve personally tested eating sugary
                                    foods/desserts—with and without P3-OM,
                                    and the difference is night and day.
                                    P3-OM absolutely improves your ability
                                    to handle (and even benefit) from sugar,
                                    and that’s essential this Halloween.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                    {/* END MUI Card Turn Sugary Toxins */}
                    {/* START MUI Card Milk Protein Hurdle */}
                    <Card className={classes.root}>
                        <CardHeader
                            title="Milk Protein Is Another
                                    Big Halloween Hurdle"
                            subheader="Milk Chocolate And Its' Effect On The Gut"
                        />
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/paella.jpg"
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                A very high percentage
                                of Halloween candies are chocolate...
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    A very high percentage of Halloween candies are chocolate.
                                    Milk chocolate, to be precise.
                                    And milk protein is one of the
                                    most hard-to-digest substances in
                                    existence.
                                </Typography>
                                <Typography paragraph>
                                    You don’t want that protein
                                    sitting in your gut, rotting
                                    and creating other issues.
                                    This is where enzymes come in.
                                    If you take enzymes whenever
                                    you eat milk chocolate, you’ll
                                    have less inflammation and less
                                    negative gut-related issues.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                    {/* END MUI Card Milk Protein Hurdle */}
                    {/* START MUI Card Digestion */}
                    <Card className={classes.root}>
                        <CardHeader
                            title="Halloween
                                    Candies Are Not Easy to Digest"
                            subheader="Turbocharge Your Digestion"
                        />
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/paella.jpg"
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Because the colors and additives,
                                sugar, milk, the flood of carbs
                                eaten all at the same time...
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    Because the colors and additives,
                                    sugar, milk, the flood of carbs
                                    eaten all at the same time...
                                    gastric distress is huge around
                                    Halloween.
                                </Typography>
                                <Typography paragraph>
                                    But there’s a way to turbocharge
                                    your ability to eat and digest
                                    difficult foods.
                                </Typography>
                                <Typography paragraph>
                                    It’s called hydrochloric acid or
                                    HCL, and it helps create an
                                    intestinal environment where
                                    everything you consume can be
                                    effectively broken down.
                                </Typography>
                                <Typography>
                                    Both Matt and I have experimented
                                    with doing big “cheat days” with
                                    and without HCL, and the difference isn’t even close.
                                    HCL makes it so much easier to
                                    digest all the sweets, sugars and
                                    heavy foods—and HCL Breakthrough
                                    is the most potent version of this
                                    critical digestive acid.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                    {/* END MUI Card Digestion */}
                </Grid>
            </Container>
        </div>
    )
}
