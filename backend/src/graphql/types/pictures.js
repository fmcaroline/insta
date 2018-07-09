import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLFloat
} from 'graphql'

import {GenreType} from './genres';
import {RatingType} from './ratings';
import Genre from '../../models/genres'
import Rating from '../../models/ratings'


export const PictureType = new GraphQLObjectType({
  name: "ListPictures",
  description: "Pictures de la BD",
  fields: () => ({
    _id:{
      type:GraphQLNonNull(GraphQLID)
    },
    name:{
      type:GraphQLString
    },
    plot:{
      type:GraphQLString
    },
    genre:{
      type:GraphQLType,
      resolve(movie){
        const {genre} = movie
        return GenresInputType.findById(genre).exec()
      }
    },
    url:{
      type:GraphQLString
    },
    director:{
      type:GraphQLBoolean
    },
    year:{
      type:GraphQLString
    },
    rate:{
      type:GraphQLFloat
    },
    rating:{
      type:RatingType,
      resolve(movie) {
        const {rating} = movie
        return RatingType.findById(rating).exec()
      }
    },
    is_active:{
      type: GraphQLBoolean
    },
    upload_at: {
      type: GraphQLString
    }

  })
});

export const MoviesInputType = new GraphQLInputObjectType({
  name: "addMovies",
  description: "Agrega, modifica peliculas a la bd",
  fields: () => ({
    name:{
      type:GraphQLString
    },
    plot:{
      type:GraphQLString
    },
    genre:{
      type:GraphQLString,
      resolve(movie){
        const {genre} = movie
        return GenresInputType.findById(genre).exec()
      }
    },
    url:{
      type:GraphQLString
    },
    director:{
      type:GraphQLBoolean
    },
    year:{
      type:GraphQLString
    },
    rating:{
      type:RatingType,
      resolve(movie) {
        const {rating} = movie
        return RatingType.findById(rating).exec()
      }
    }
  })
})

