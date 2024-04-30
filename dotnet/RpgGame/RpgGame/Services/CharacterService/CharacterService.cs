using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RpgGame.Models;

namespace RpgGame.Services.CharacterService
{
    public class CharacterService : ICharacterService
    {
        private static List<Character> characters = new List<Character>();
        
        public List<Character> AddCharacter(Character character){
            character.Add(character);
            return characters;
        }
        public List<Character> GetAllCharacters(){
            return characters;
        }
        public Character GetCharacterByID(int id){
            return characters.FirstOrDefault(c=>c.Id == id);
        }
    }
}