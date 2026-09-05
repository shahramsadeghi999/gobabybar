const examData = [
    {
        id: 1,
        topic: "Formation / Implied-in-Fact Contract",
        fp: "A woman knew that a local writer often gave private lessons in memoir writing for $50 an hour. The market rate for such courses was closer to $30 an hour, but the writer had already published two memoirs and was somewhat famous. One day, the woman ran into the writer at the grocery store. The woman told the writer how much she admired her memoir writing. The writer then said, 'I can come by your house tomorrow to give you some lessons.' The woman said nothing. The next day, the writer showed up at the woman's house and the two of them worked on some of the woman's writing for an hour. For four weeks, the writer showed up at the woman's house at the same time, on the same day, and the two of them worked for an hour. At the end of the month, the writer asked the woman to pay her. How much does the woman owe?",
        q: "How much does the woman owe?",
        opts: [
            "Nothing, because the woman never agreed to pay the writer.",
            "$120, the fair market value of the writer's lessons since the two of them never had a formal agreement.",
            "Nothing, because by showing up at the woman's house, the writer was making a gratuitous gift.",
            "$200, since this represented the writer's standard fee."
        ],
        ans: 3,
        exp: "Even if parties do not expressly exchange an offer and acceptance, if they indicate by their conduct their understanding that a contract was formed, an implied-in-fact contract exists. Importantly, if an offeree silently receives the benefit of the offeror's services, a court will hold that the offeree accepted a contract for those services if he or she had a reasonable opportunity to reject them and knew or should have known that the offeror expected to be compensated. Here, the woman had a reasonable opportunity to reject the writer's services (they met each other for an hour over four weeks), and she knew that the writer was usually compensated at $50 an hour for writing lessons. Consequently, an implied-in-fact contract was formed for the lessons at the writer's usual rate. A is incorrect because an implied-in-fact contract was formed under these facts. B is incorrect because market value is irrelevant to the analysis. C is incorrect because there is no fact indicating that the writer was intending to make a gift of her services."
    },
    {
        id: 2,
        topic: "Performance / Express Conditions",
        fp: "A boxer, the son of a poor family, grew up on his family's small farm just outside of town. Despite the handicaps of poverty and lack of education, the boxer eventually became the world's heavyweight boxing champion. Proud of the boxer's accomplishments, the town council voted to erect a statue commemorating the boxer's victory over his social and economic disadvantages. Pursuant to town ordinances and regulations, bids were accepted from several sculptors, including the plaintiff. Because the plaintiff's work was relatively unknown, she attempted to make her bid more attractive to the council by including a guarantee that her work would be satisfactory. On February 1, the town council entered into a written contract with the plaintiff, hiring her to create the statue, and agreeing to pay her $5,000 upon its installation on the steps of the town hall on or before June 30. A clause in the contract provided, 'It is expressly understood that the personal satisfaction of the Mayor is a condition precedent to the council's obligation to make payment hereunder. Upon completion of the statue, it shall be made available for inspection by said mayor. If said mayor is unsatisfied with the work, he shall notify the plaintiff immediately, and the contract shall be canceled without liability of any party.'\n\nThe plaintiff sculpted a likeness of the boxer in farmer's overalls with his hands in boxing gloves clasped victoriously over his head, which she completed on June 10. The boxer had been arrested in another state on May 30, however, and charged with possession of a dangerous drug. His trial was scheduled for September 10. The town council was fearful that the boxer would be convicted and that the statue would embarrass the town. The mayor went to the plaintiff's studio on June 11 after receiving notice that the statue was ready for inspection. When he arrived, the statue was covered with a canvas tarpaulin. When the plaintiff removed the cover, the mayor said, 'It's too small. The deal is off.' The mayor truly believed the statue was too small, even though he was also fearful of the conviction. The plaintiff subsequently demanded that the town council pay for the statue, but the council refused.",
        q: "Does the town council have to pay for the statue?",
        opts: [
            "Yes, because a reasonable person would have found the plaintiff's work to be satisfactory.",
            "Yes, because the mayor was fearful that the statue would embarrass the town if the boxer was convicted.",
            "No, because the contract gave the mayor the absolute right to reject the plaintiff's finished work.",
            "No, because the mayor actually believed that the statue was too small."
        ],
        ans: 3,
        exp: "Ordinarily, a promise to perform services implies a promise to perform them in a satisfactory manner, judged by an objective standard. A specific agreement that personal satisfaction is required, however, is usually understood to call for subjective satisfaction so long as the party whose satisfaction is required acts in good faith. Thus, if the mayor actually believed that the statue was too small, and he was, therefore, not subjectively satisfied with it, the town is discharged of its obligation under the contract.\n\nA is therefore incorrect. If the mayor liked the statue but rejected it because he feared embarrassment resulting from a conviction, the town would be in breach because the rejection would not be in good faith. If he genuinely did not like the statue, however, the incidental fact that he feared embarrassment if the boxer was convicted would not be relevant. B is therefore incorrect. Although the clause called for subjective satisfaction, it did not create an absolute right to reject the work since such an agreement is understood to mean that the decision as to whether or not the work is satisfactory must be made in good faith. C is therefore incorrect."
    },
    {
        id: 3,
        topic: "Consideration / Promissory Estoppel",
        fp: "The plaintiff worked for a corporation for 40 years. The corporation told the plaintiff that the plaintiff would be given the right to retire at any time with a lifetime pension. The plaintiff continued to work for a few more years, then retired after downsizing her home so that her expenses could be covered by the pension. She received the pension for several years. After the founder of the corporation died, the corporation stopped paying the pension. The plaintiff then sued.",
        q: "Is the plaintiff entitled to the pension?",
        opts: [
            "Yes, because she chose to retire when she could have kept on working.",
            "Yes, because she received the pension in recognition of her 40 years of service.",
            "No, because she worked for a few more years after receiving the pension promise.",
            "No, because there was no consideration supporting the promise of the pension."
        ],
        ans: 0,
        exp: "Promissory estoppel is used by the courts to enforce promises when the promise induces the promisee to rely on it to his or her detriment. Here, the plaintiff relied on the promise to her detriment because she retired when she could have gone on working based on her belief that she would receive a pension. Consequently, the promise can be enforced through promissory estoppel. B is incorrect because 'past services are not valid consideration for a promise.' Consequently, the plaintiff's years of service prior to the awarding of the pension were not consideration for the pension. C is incorrect because the plaintiff retired in reliance on the pension promise. D is incorrect because, although there was no consideration for the pension, it could still be enforced through promissory estoppel."
    },
    {
        id: 4,
        topic: "Performance / Right to Inspect Prior to Acceptance",
        fp: "By a written contract, the plaintiff, the operator of a natural foods store, agreed to purchase 200 pounds of large nuts from the defendant at a specified price. A term of the contract provided that 'payment shall be due immediately on delivery and prior to inspection of the shipment.' When a box containing the nuts was delivered, the plaintiff paid the agreed price without inspecting its contents. One hour later, the plaintiff opened the box and discovered that it contained small nuts instead of large nuts. When the plaintiff telephoned the defendant to ask that the defendant exchange the small nuts for large ones, the defendant refused. The plaintiff repackaged the nuts and returned them to the defendant. Subsequently, the plaintiff asserted a claim against the defendant for breach of contract.",
        q: "What is the most accurate characterization of the contract provision that required payment prior to inspection?",
        opts: [
            "It is unconscionable and therefore not subject to enforcement.",
            "It constitutes a waiver of the buyer's right to inspect prior to acceptance.",
            "It does not impair the buyer's right to inspect prior to acceptance.",
            "It was not enforceable when the contract was made, but since the plaintiff did pay before inspecting the goods, he waived his right to a pre-acceptance inspection."
        ],
        ans: 2,
        exp: "UCC §2-512(2) specifically provides that where a contract calls for payment prior to inspection, such payment does not constitute acceptance and does not impair the buyer's right to inspect.\n\nThe requirement of payment prior to inspection is not an uncommon one, and therefore not unconscionable, making A incorrect. B and D are incorrect because UCC §2-512(2) prevents pre-inspection payment from having these effects."
    },
    {
        id: 5,
        topic: "Formation / Firm Offer vs Option Contract",
        fp: "A musician went to a music store and saw a guitar he really liked. However, the guitar cost $50,000 and was more expensive than the musician could afford. The musician told the store owner that he was going on tour and would be back in five months. At that point, the musician thought that he might have enough money to buy the guitar. The store owner wrote out the following letter: 'For $10, I promise to only sell the guitar to you for the next six months.' The musician gave the store owner $10 and thanked him for holding on to the guitar. Five-and-a-half months later, the musician returned to the store with the money to buy the guitar. The store owner told the musician that he had already sold it to another person. The musician sued the store owner for breach of contract.",
        q: "Should the court rule in the musician's favor?",
        opts: [
            "Yes, because the store owner made a firm offer.",
            "Yes, because the store owner accepted the musician's $10.",
            "No, because the store owner agreed to hold the offer open for longer than 90 days.",
            "No, because the store owner revoked the offer before the musician accepted it."
        ],
        ans: 1,
        exp: "A merchant's firm offer can only be held open for a maximum of three months. However, if an agreement to hold an offer open is supported by consideration, it is a common law option contract and can be held open for as long as the parties want. Here, the store owner's agreement to hold the offer open for six months was supported by the musician's $10 consideration. Thus, the store owner breached the contract when he sold the guitar to someone else before the six months were over.\n\nA is incorrect because the store owner agreed to hold the offer open for more than 90 days. C and D are incorrect because this was a valid common law option contract."
    },
    {
        id: 6,
        topic: "Consideration / Bargained-For Exchange",
        fp: "Which of the following is most likely to be regarded as valid consideration for a man's oral promise to pay his neighbor $1,000?",
        q: "Which of the following is most likely to be regarded as valid consideration for a man's oral promise to pay his neighbor $1,000?",
        opts: [
            "The fact that his neighbor had saved the man's house from a fire the day before the man's promise was made.",
            "The fact that at the same time the man made the promise to pay, his neighbor promised to deliver to the man fire-fighting equipment valued at $1,000.",
            "The fact that after the man made the promise, his neighbor relied upon it by committing himself to the purchase of fire-fighting equipment at a price of $1,000.",
            "The fact that immediately after the man made the promise, his neighbor sent the man a written memorandum of their agreement, to which the man did not object within 30 days."
        ],
        ans: 1,
        exp: "Although the Statute of Frauds might require a contract for the sale of goods with a price of $1,000 to be in writing, the question asks only if the neighbor's promise can be viewed as consideration for the man's promise. Consideration is something of value that is bargained for and given in exchange for a promise. Since the neighbor's promise to deliver fire-fighting equipment is of obvious value to the man, if given in return for the man's promise of payment, it is consideration for it.\n\nA is incorrect because the neighbor's prior services were not given in exchange for the man's promise. C is incorrect because the doctrine of promissory estoppel may make a contract enforceable in the absence of consideration, but although detrimental reliance may take the place of consideration, it is not consideration unless bargained for. Although the kind of written memorandum referred to in D sometimes satisfies the requirement of a writing, it is not relevant to the question of consideration or the lack of it."
    },
    {
        id: 7,
        topic: "Formation / Requirements Contracts",
        fp: "An airline agreed to buy all of its jet fuel requirements from a jet-fuel supplier. The supplier committed to supply those requirements at a price pegged to the industry-wide posted price for crude oil. Then, because of a war, the price increased dramatically. The supplier reneged on the agreement. The airline sued.",
        q: "Will the court enforce the contract?",
        opts: [
            "No, because the war was not foreseeable at the time of contracting.",
            "No, because the plaintiff was not bound to buy any goods at all.",
            "Yes, because it bound itself to act reasonably and in good faith in estimating the quantity of fuel it required.",
            "Yes, because a mere price increase due to a war would not invalidate the agreement."
        ],
        ans: 2,
        exp: "UCC §2-306 states that 'a term which measures the quantity by the output of the seller or the requirements of the buyer means such actual output or requirements as may occur in good faith, except that no quantity unreasonably disproportionate to any stated estimate or in the absence of a stated estimate to any normal or otherwise comparable prior output or requirements may be tendered or demanded.' Comment 2 to §2-306 states that requirements and output contracts do not 'lack mutuality of obligation since under this section, the party who will determine quantity is required to operate his plant or conduct his business in good faith and according to commercial standards of fair dealing in the trade so that his output or requirements will approximate a reasonably foreseeable figure.' Under a requirements contract, the buyer promises that he or she will buy all of his or her requirements from the seller. This promise, coupled with the buyer's good faith obligation to order reasonable quantities, constitutes consideration for the seller's counter-promise to meet the buyer's needs. Here, the airline bound itself to act reasonably and in good faith in estimating the quantities of fuel it required. Since the airline was bound, the supplier's return promise was not void for lack of mutuality of obligation. Consequently, B is incorrect. A and D are incorrect because part of the purpose of a requirements contract such as this one is to receive goods at predictable price. Thus, wars pushing up prices and other price increases are likely foreseeable."
    },
    {
        id: 8,
        topic: "Third Parties / Assignment of Rights",
        fp: "After the commercial success of a rock music group, its lead singer entered into a contract with the defendant. According to its terms, the singer, singing alone, was to record a song for the defendant. The defendant was to pay $2,000 to the singer 30 days after the record was made, whether or not it was ever commercially released. If the record was released, the singer was to receive additional compensation depending on the number of copies of the record that were sold.\n\nThe singer made the record required by the contract on March 1. On March 15, the singer bought a piano, promising to pay for it when he received payment from the defendant. As security for his promise, the singer assigned to the piano seller his right to collect the $2,000 that the defendant owed him for making the record. The piano seller immediately notified the defendant of the assignment. On April 1, the singer purported to assign the same right to his landlord to induce him to refrain from instituting eviction proceedings based on non-payment of rent. The landlord immediately notified the defendant of the assignment. On April 20, the singer sued the defendant for non-payment of the $2,000.",
        q: "Which of the following additional facts or inferences, if it were the only true, would be most likely to result in a judgment for the defendant?",
        opts: [
            "The singer was an infant at the time of all the transactions described above.",
            "The singer made at least one effective assignment of the right to collect the $2,000.",
            "The singer's performance at the March 1 recording session was so bad that the record can never be commercially released.",
            "A statute in the jurisdiction prohibited the assignment of future wages by employees."
        ],
        ans: 1,
        exp: "An assignment is effective only if the assignor has given up all rights under the assigned contract. Thus, if the singer has made an effective assignment, he no longer has any rights against the defendant.\n\nA is incorrect for several reasons: First, since the contract was for the singer's business, the singer's infancy is probably irrelevant; second, even if the singer's infancy at the time of his contract with the defendant is relevant, it makes the contract voidable at the singer's option, not the defendant's; and, third, if the singer's infancy invalidated the assignments, the defendant would not benefit in the singer's action against it. C is incorrect because the agreement was to pay for the recording session whether or not a record was ever released. D is incorrect because the singer was probably a contractor rather than an employee and because if the assignments were held invalid, the defendant would have to pay the singer."
    },
    {
        id: 9,
        topic: "Performance / Express Conditions (Satisfaction)",
        fp: "In an agreement made on April 15, the plaintiff agreed to design a coat of arms for the defendant and to fabricate a wooden door with the coat of arms carved into it for the front of the defendant's home. The defendant agreed to pay $650 for the door, but it was understood that if the defendant was not completely satisfied with the coat of arms and the door, he would be under no obligation to go through with the deal. Before the plaintiff completed the door, the defendant came to the conclusion that he did not really want a coat of arms. When the plaintiff brought the finished door to the defendant, the defendant took a quick glance at it. Although the coat of arms was properly designed and carved, and although the door had been fabricated in a workmanlike manner, the defendant said, 'I just don't like it,' and refused to accept it.",
        q: "In an action by the plaintiff against the defendant, which of the following would be the defendant's best defense?",
        opts: [
            "The agreement was not in writing as required by the Statute of Frauds.",
            "The agreement was an offer for a unilateral contract that the defendant rejected by refusing to accept the finished door.",
            "The defendant's subjective satisfaction was a condition precedent to his obligation to accept the door.",
            "Since the coat of arms was not yet associated with the defendant, it was possible for the plaintiff to find another buyer for it."
        ],
        ans: 2,
        exp: "A condition precedent is an event that must occur before a party's obligation to perform under a contract becomes absolute. Since the agreement provided that the defendant would be under no obligation to pay unless he was satisfied with the product, satisfaction was a condition precedent to his obligation to accept and pay for the door. Ordinarily, a contract making a buyer's satisfaction a condition precedent to his or her obligation is held to require that the goods be satisfactory to the reasonable person (i.e., objective satisfaction). However, where the agreement calls for the design of something to be personally identified with the buyer, as here, it is more likely that the parties intended the buyer's own personal satisfaction (i.e., subjective satisfaction) to be the standard. If so, the defendant's dissatisfaction with the product, so long as it was based on good faith, would prevent the defendant from being obligated to purchase the door. While it is not certain that a court would come to this conclusion, the argument set forth in C is the only one listed that could possibly support the defendant's position.\n\nA is incorrect because the Statue of Frauds does not apply to goods that are specially designed for the buyer and which, therefore, would not be readily salable in the regular course of business. A unilateral contract is one in which the promisor has agreed to do something in return for a specified act by the promisee (i.e., a promise for an act), and, therefore, one in which only one party is bound to perform. B is incorrect because the agreement between the defendant and the plaintiff was an exchange of promises, each party's promise being given in exchange for the other party's promise (i.e., a bilateral contract). If the plaintiff were able to sell the door to another buyer, her damages might be mitigated to some extent. D is incorrect, however, because the mere possibility that damages might thus be mitigated is not sufficient to defeat the plaintiff's substantive rights."
    },
    {
        id: 10,
        topic: "Consideration / Bargained-For Exchange",
        fp: "Because its property was filling up with a lot of unwanted recycled plastic it didn't want to pay to have removed, a landfill gave a construction firm free recycled plastic for use in its construction work. All the firm had to do was come to the landfill and pick it up. The plastic turned out to be defective, and the firm sued the landfill for breach of contract. The landfill argued that there were no contractual obligations to the firm because any promise it made was not supported by consideration. The landfill argued it had merely made a gift of the plastic on the condition that the firm come and pick it up. Can the firm successfully sue for breach of contract?",
        q: "Can the firm successfully sue for breach of contract?",
        opts: [
            "Yes, because the firm relied on the landfill's promise to its detriment.",
            "Yes, because the landfill wanted the firm to take the plastic and benefited when it did so.",
            "No, because the landfill did not bargain for the firm's performance.",
            "No, because the unwanted plastic was a gift."
        ],
        ans: 1,
        exp: "Even if a defendant can show that a plaintiff never overtly bargained for the defendant's promise to do something, as long as a court concludes that the defendant's promise induced the plaintiff's promise or performance, the fact that the defendant didn't expressly bargain in return for that promise doesn't matter. Here, there was consideration because the landfill offered the plastic for free because it wanted someone else to come remove it, and thus save the landfill the cost of disposing of the plastic itself.\n\nA is incorrect because there is no fact showing that the construction firm detrimentally relied on the landfill's promise (e.g., buying a special machine for the plastic, etc.). C is incorrect because the 'bargain' theory of consideration does not mean the parties must actually bargain over the terms of the agreement-it just means the promise made by the defendant and the detriment to the plaintiff must induce each other. D is incorrect because this was not a gift situation. The landfill wanted to have the plastic hauled away for free, and the construction firm wanted the plastic and agreed to do so."
    },
    {
        id: 11,
        topic: "Consideration / Pre-existing Duty Rule",
        fp: "A baby was kidnapped from a famous aviator's home. The aviator and his wife held an online press conference and announced a $1 million reward to anyone who found the kidnapper and saved their baby. A few days later, an on-duty police officer who had heard about the reward got a tip from one of his confidential informants that the kidnapper was hiding in a vacant and boarded-up brownstone in a bad neighborhood. The police officer went to the brownstone and surveilled the scene for several hours. Eventually, he saw a man and a baby in the brownstone's upstairs window. The officer waited until dark, then snuck in a back window and immediately apprehended the kidnapper. The officer arrested the kidnapper, handcuffed him to a radiator, and took the baby back to the aviator and his wife. When the aviator said that he could never thank the officer enough, the officer requested the reward money. The aviator and his wife refused to give the reward to him. The police officer sued the aviator and his wife for the reward money.",
        q: "Should the court rule in the police officer's favor?",
        opts: [
            "No, because the police officer had a preexisting duty to arrest the kidnapper.",
            "No, because the police officer failed to accept the reward offer before arresting the kidnapper.",
            "Yes, because the police officer accepted the reward offer with his performance.",
            "Yes, because the police officer knew about the reward offer before beginning performance."
        ],
        ans: 0,
        exp: "Under the preexisting duty rule, there is no consideration to support the formation of a contract if the accepting party already has a duty to perform the subject of the agreement. Here, an on-duty police officer has a preexisting duty to apprehend and arrest criminals. Consequently, the officer's performance in arresting the kidnapper and saving the baby did not create an enforceable contract.\n\nB is incorrect because the police officer could not accept the reward under the preexisting duty rule. C and D are also incorrect because of the preexisting duty rule."
    },
    {
        id: 12,
        topic: "Terms / Parol Evidence Rule (Interpretation of Ambiguity)",
        fp: "On June 11, the homeowner asked a local handyman whether the handyman would be interested in painting the homeowner's house. Following their conversation, they entered into the following handwritten agreement, which the handyman wrote on the back of an old envelope and which both signed: 'The homeowner and the handyman hereby agree that the handyman will paint the outside of the homeowner's house for $700 as follows: wood trim brown; doors and window frames green; siding yellow (two coats).' The handyman painted the siding yellow and gave it two coats of paint. He painted the wood trim brown and the doors and window frames green, but gave them only one coat of paint. The homeowner refused to pay unless the handyman gave the wood trim, doors, and window frames a second coat. The handyman instituted an action against the homeowner for $700. At the trial, the homeowner attempted to testify that prior to executing the agreement, he and the handyman agreed orally that the handyman would apply two coats of paint to the wood trim, doors, and window frames, as well as to the siding.",
        q: "Is the homeowner's testimony admissible?",
        opts: [
            "Yes, only for the purpose of establishing that the phrase '(two coats)' is ambiguous.",
            "Yes, for the purpose of establishing that the phrase '(two coats)' is ambiguous and for the additional purpose of explaining the ambiguity.",
            "No, because the agreement was written by the handyman.",
            "No, because the writing was a complete expression of the agreement of the parties."
        ],
        ans: 1,
        exp: "The parol evidence rule prohibits the admission of extrinsic evidence of a prior or contemporaneous agreement to contradict, vary, or modify the terms of an unambiguous written contract that the parties intended to be a final and complete expression of their agreement. Almost all jurisdictions, however, permit extrinsic evidence to be used to establish that the writing is ambiguous, and, if so, to explain the ambiguity.\n\nA is incorrect since it does not recognize that oral testimony may be used to explain the ambiguity. C is incorrect because it is irrelevant which party drafted the agreement. D is incorrect since even if the writing was a complete expression of the parties' agreement, oral testimony is admissible to explain ambiguities."
    },
    {
        id: 13,
        topic: "Consideration / Compromise of a Claim",
        fp: "A man, who had been studying the writings of various mystical philosophers, decided to sell all his worldly possessions, give the money to charity, and wander about in the desert for a while to seek insight and spiritual fulfillment. After about a month in the desert, the man became ill and collapsed into unconsciousness. When he woke, he was in the home of a retired surgeon who now lived like a hermit in the desert, and who had found him in a helpless condition. As the doctor fed soup to the man, the man said, 'I have no money. I can never pay you for any of this.' The doctor replied, 'I'm not doing this for money.' During the next week, the doctor fed the man and gave him medical treatment. When the man was well enough to travel, the doctor borrowed an old pickup truck from a distant neighbor and drove the man to the house of the man's mother. The following week, after the man told his mother what the doctor did for him, the man's mother wrote the doctor: 'In gratitude for the services that you rendered my son, I hereby promise to pay you $350.00 when I get my dividend check next month.' Before the dividend check arrived, however, both the man's mother and the doctor died. The plaintiff, the doctor's administrator, advised the mother's husband of the letter that his wife had sent and indicated that he intended to make a claim against her estate for $350. After a discussion with the plaintiff, in which the plaintiff agreed not to assert a claim against the mother's estate, the husband prepared a document that read, 'In consideration of services rendered by the doctor to my wife's son, and of the plaintiff's promise to make no claim against the estate of my wife, I hereby agree to pay $350.00 to the doctor's estate.' After signing the document, the husband handed it to the plaintiff. The husband never paid anything to the estate, however, and the plaintiff instituted suit against him. The husband defended on the ground that his promise to pay $350 was not supported by consideration.",
        q: "If the plaintiff's lawsuit against the mother's husband is successful, it will most likely be for which of the following reasons?",
        opts: [
            "The document that the husband executed was an offer for a unilateral contract that the plaintiff accepted by not making a claim against the mother's estate.",
            "A judgment for the husband would result in his being unjustly enriched.",
            "The husband is estopped from denying the validity of his agreement with the plaintiff.",
            "The husband's agreement with the plaintiff was a compromise."
        ],
        ans: 3,
        exp: "A promise to forbear or abandon a civil claim in return for some payment by the promisee is referred to as a compromise. The promise to forbear is sufficient consideration for the promisee's promise to pay if the claim could have been asserted in good faith. Although the facts do not indicate whether the plaintiff believed in good faith that he had a claim against the mother, D is the only theory listed that might have any prospect of success.\n\nA is incorrect since the husband's promise was given in exchange for the plaintiff's 'promise to make no claim,' and a unilateral contract involves a promise that is given in exchange for an act rather than a promise. B is incorrect since the facts do not indicate any unjust enrichment, and since, even if they did, unjust enrichment is not, alone, enough to result in liability. C is incorrect since promissory estoppel requires detrimental reliance by the promisee, and there is no fact indicating detrimental reliance by the plaintiff."
    },
    {
        id: 14,
        topic: "Formation / Option Contracts (Without Consideration)",
        fp: "A family rented a small summer camp every year for 20 years to hold a yearly family reunion. This year, the summer camp owner received an offer from a local university to rent the camp for the entire summer for team-building exercises. On January 15, the owner sent a signed letter to the family member who always signed the rental contract. The letter said, 'I have completely relied on your business these past 20 years, so I wanted to see if you were planning on renting the camp again this summer. State A wants to rent the summer camp, and it said it will sign a 20-year rental contract, which will guarantee the summer camp is rented for the foreseeable future. My son is also going to State A university, and I want to make nice with the school. But, since I've relied on you and your family for so long, I want to give you a chance to rent the camp before I say yes to the school. With this signed letter, I hereby give you an irrevocable firm offer to hold the offer to rent my camp open until April 1.' The family member received the letter, but didn't respond immediately. A week later, the family member was watching television when he saw an advertisement for a new State A university program that was to be held on the summer camp's property for the next 20 years. The family member called the camp owner, who confirmed that he'd signed a long-term rental agreement with the university the week before. The family member sued to enforce the parties' agreement.",
        q: "Should the court rule in the family member's favor?",
        opts: [
            "Yes, because the summer camp owner had relied on the family member's rental for 20 years.",
            "Yes, because the family member had relied on the summer camp's rental for 20 years.",
            "No, because the summer camp owner had already signed a rental agreement with the university.",
            "No, because the family member did not respond to the letter immediately."
        ],
        ans: 2,
        exp: "Unless it is a firm offer under the UCC, a promise to hold an offer open without consideration is unenforceable. Here, the parties did not exchange any consideration to hold the offer open until April 1. Consequently, despite any language the camp owner used in his letter, the promise to hold the offer open was unenforceable.\n\nA and B are incorrect because past reliance is not enough to make a promise enforceable. Specifically, to enforce an agreement through promissory estoppel, the particular promise itself has to induce reliance. Here, the parties simply had a habit of renting the summer camp. D is incorrect because the family member could have accepted the offer any time before April 1 if the university hadn't rented the property first."
    },
    {
        id: 15,
        topic: "Consideration / Past Consideration",
        fp: "A factory employee told her boss about an idea she had to improve factory efficiency. The boss told the employee to try out the idea, and the employee did so. The idea managed to save the factory twice as much money as the boss had anticipated. The boss went to the employee and promised that she'd give the employee a $5,000 bonus on June 1 because of the employee's 'great work' with her efficiency idea. On May 25, the boss told the employee that she had decided to use the factory's cost savings to give a bonus to herself and other factory executives instead of the employee. The employee sued, arguing that she was entitled to the $5,000 bonus.",
        q: "Should the court rule in the employee's favor?",
        opts: [
            "No, because there was no consideration to support the promise.",
            "No, because the promise violated the Statute of Frauds.",
            "Yes, because the employee had conferred a material benefit to the factory.",
            "Yes, because the boss had notified the employee of the future bonus."
        ],
        ans: 0,
        exp: "A promise to pay for services received in the past is usually held not to be supported by consideration. Here, the employee had already told the boss her idea and completed its implementation when the boss promised to pay her a bonus. Thus, the promise is unenforceable. B is incorrect because the Statute of Frauds would not apply to the promise of a bonus for work already performed. C is incorrect because the mere fact that the factory received a material benefit would not support the promise. D is incorrect because the boss telling the employee about the bonus would not change the analysis."
    },
    {
        id: 16,
        topic: "Consideration / Forbearance of an Invalid Claim",
        fp: "The plaintiff was a manufacturer of sewing supplies, including thread, needles, thimbles, and patterns. The defendant was an engineer employed by the plaintiff in its product design department. Working at home on his days off, the defendant invented a device that could be used to increase the fuel efficiency of automobile engines. Without telling his employer anything about it, the defendant obtained a patent on the device and sold the patent rights for $100,000 to a motor vehicle manufacturer. The plaintiff subsequently learned about the defendant's invention and demanded the money that the defendant had received from the manufacturer. In support of its demand, the plaintiff referred to a provision of the defendant's employment contract that required him to devote all his working time and energies to his employment. The plaintiff's attorneys argued that because of this provision, the device had been invented on company time, and that the patent rights therefore belonged to the plaintiff. At a conference with the plaintiff's attorneys, the defendant signed a promissory note for $50,000, payable to the plaintiff, and the plaintiff agreed to abandon its claim. When the note came due, the defendant refused to pay it.",
        q: "In an action by the plaintiff against the defendant on the promissory note, which of the following additional facts or inferences, if it was the only one true, would be most helpful to the defendant's defense?",
        opts: [
            "The employment contract was oral, although the Statute of Frauds required it to be in writing.",
            "At the time the defendant signed the promissory note, the plaintiff did not honestly believe that it was entitled to the patent rights, but the defendant believed that the plaintiff was entitled to the patent rights.",
            "At the time the defendant signed the promissory note, the plaintiff honestly believed that it was entitled to the patent rights, but the defendant did not believe that the plaintiff was entitled to the patent rights.",
            "The plaintiff was not entitled to the patent rights under the employment contract."
        ],
        ans: 1,
        exp: "Even if a claim is invalid, a promise to abandon it may be consideration for another's promise of payment if the claim could have been asserted in good faith. If the plaintiff did not believe that it was entitled to the patent rights, it could not have asserted its claim in good faith, and its promise to abandon the claim would not have been consideration for the defendant's promise.\n\nIf the plaintiff's claim was asserted in good faith, abandonment of the claim was consideration for the defendant's promise of payment, regardless of whether the employment contract was enforceable. A is therefore incorrect. C is incorrect since it indicates that the plaintiff's promise to abandon the claim was made in good faith, which would make it good consideration for the defendant's promise. D is incorrect because abandonment of an invalid claim may be consideration for a promise to pay, so long as the person abandoning the claim believes in good faith that it is a valid one."
    },
    {
        id: 17,
        topic: "Terms / Risk of Loss (FOB Origin)",
        fp: "The plaintiff was a manufacturer of wood-finishing products with a plant in the city. The defendant was a manufacturer of wooden furniture with a factory located in the town. Pursuant to a written agreement, the defendant agreed to purchase 50 gallons of wood stain from the plaintiff at $5 per gallon, 'FOB the defendant's factory.' The plaintiff delivered the wood stain to a trucking company that loaded it safely onto a truck in the city. While en route to the town, however, the truck was hijacked by thieves. Its contents were never recovered.",
        q: "In an action by the plaintiff against the defendant for the agreed price of the stain, which of the following comments is most correct?",
        opts: [
            "The plaintiff fulfilled her obligation to the defendant when the stain was loaded safely aboard a truck in the city.",
            "The risk of loss passed to the defendant when the plaintiff delivered the stain to the trucking company, although title to the stain never actually passed to the defendant.",
            "The risk of loss did not pass to the defendant.",
            "The risk of loss was not on the plaintiff, since the loss was the result of action by the public enemy."
        ],
        ans: 2,
        exp: "The term 'FOB' requires the seller to deliver the goods on board the carrier at the place specified, and the risk of loss does not pass to the buyer until the seller has done so. Since this contract was 'FOB the defendant's factory,' the plaintiff's obligation was to deliver it there, and the risk of loss did not pass until she did so.\n\nA and B are therefore incorrect. D is incorrect for two reasons: First, the term 'public enemy' refers to a person, group, or nation waging war against the United States, and second, because while interference by a public enemy might relieve a seller of the obligation to deliver, it does not pass the risk of loss to a buyer."
    },
    {
        id: 18,
        topic: "Third Parties / Creditor Beneficiary",
        fp: "When a landowner's daughter and a painting contractor's son announced that they were getting married, the landowner and the contractor decided to give them a house as a wedding present. On January 1, the two men entered into a written agreement with each other, pursuant to which they were to have a house built on the landowner's lot, with the landowner and the contractor each paying half the cost. It was further agreed that after completion of the house, the contractor would pay the landowner $10,000 as his share of the cost of the lot, and the landowner would convey the lot to their children. On February 2, the two men entered into a written contract with the plaintiff, a builder. The contract called for payment in installments, each payment being due upon completion of a specified stage of building. In addition to its other terms, the contract contained a clause providing that as each payment came due, the plaintiff would bill and collect half of it from the landowner and half of it from the contractor. In the contract, the plaintiff agreed that neither would be responsible to him for more than half of the price. On March 3, the contractor entered into a separate contract with the plaintiff. Pursuant to this contract, the plaintiff hired the contractor as a subcontractor to do all the painting required in connection with the construction of the house. Because the house was being built for his son, the contractor agreed to do the job for $3,000 although his work was worth $5,000. The $3,000 was to be deducted from the final payment that the contractor would owe the plaintiff for construction of the house. In April, the contractor became ill. Because he could no longer work, he sold his painting business to his son, a competent and licensed painting contractor, for about half of what it was actually worth. As one of the terms of the contract of sale, the contractor's son promised to do all the painting work on the house that the plaintiff was constructing. The contractor notified the plaintiff of his agreement with his son. When the house was ready to be painted, however, the contractor's son informed the plaintiff that he would not paint it. The plaintiff hired another painting subcontractor to do the job at a price of $5,000 and asserted a claim for breach of contract against the contractor's son.",
        q: "If there was an enforceable contract between the contractor and his son, whom should the court find for?",
        opts: [
            "The contractor's son, because there was no privity between the plaintiff and him.",
            "The contractor's son, because a contract for personal services is not assignable.",
            "The plaintiff, because the plaintiff was an intended donee beneficiary of the contract between the contractor and his son.",
            "The plaintiff, because the plaintiff was an intended creditor beneficiary of the contract between the contractor and his son."
        ],
        ans: 3,
        exp: "When a promise is made with the intent that its benefit flow to a third person, that person is an intended beneficiary of the promise. When that benefit is intended to satisfy an obligation that the promisee owes to the third party, the third party is an intended creditor beneficiary. According to the Restatement (Second), a promise is enforceable by an intended creditor beneficiary when he or she relies upon or assents to the arrangement. Since the beneficiary is presumed to have assented when notified of the contract, and since the contractor notified the plaintiff, the plaintiff may enforce the contractor's son's promise even though there is no privity between them.\n\nA is therefore incorrect. B is incorrect for two reasons: First, because non-assignability would prevent the assignee from recovering but could not be raised as a defense by that assignee, and second, because obligations under a construction contract may generally be assigned to any competent contractor. C is incorrect because the preexisting obligation that the contractor owed the plaintiff, and which the contractor's contract with his son was designed to satisfy, made the plaintiff a creditor rather than a donee beneficiary."
    },
    {
        id: 19,
        topic: "Defenses / Intoxication",
        fp: "The seller and the buyer had been friends for years. The seller was the owner of a rare antique sports car, which the buyer had offered to buy from her on several occasions but which the seller had never been willing to sell. On the buyer's birthday, the seller and the buyer went out for dinner and drinks. After dinner, the seller continued drinking until she was somewhat intoxicated. During their conversation, the seller said, 'As a birthday present, I've decided that I'm going to sell you my sports car for $500. And just to make sure that I don't change my mind after I sober up, I'll put it in writing.' With that, she wrote on a paper napkin, 'We agree to the sale of my sports car to the buyer for $500, COD,' and signed her name at the bottom. The buyer also signed the napkin and put it in her purse. The following day, the buyer tendered $500 in cash to the seller, but the seller refused to sell her the car, claiming that she had been drunk when she made the offer.",
        q: "In an action by the buyer against the seller for breach of contract, which of the following additional facts, if it was the only one true, would be most helpful to the seller's defense?",
        opts: [
            "The seller was so drunk when she wrote on the napkin that she did not know the legal consequences of her act.",
            "The seller would not have offered to sell the car to the buyer for $500 if she had not been drunk.",
            "The car was worth more than $500.",
            "The seller changed her mind about selling the car before the buyer tendered the cash."
        ],
        ans: 0,
        exp: "Since a contract is a meeting of minds, a person who does not know the legal consequences of his or her act is incapable of contracting. Where the incapacity results from intoxication, some jurisdictions require proof that the other party was aware of the intoxication and the resulting incapacity. Although it is not clear whether the buyer was sufficiently aware of the seller's incapacity, the additional fact in A is the only one listed that could help the seller's defense.\n\nSo long as the seller knew the legal consequences of her act, her motivation is irrelevant. B is therefore incorrect. So long as the consideration given for a promise has value, courts, recognizing that contracting parties may be motivated by factors other than monetary worth, do not usually inquire into the sufficiency of that value. For this reason, C is incorrect. Although an offeror may withdraw an offer at any time prior to acceptance, D is incorrect for two reasons: First, such withdrawal is not effective until communicated to the offeree, and second, the facts suggest that a contract was formed when the napkin was signed, making a subsequent attempt at revocation ineffective."
    },
    {
        id: 20,
        topic: "Formation / Agreement to Agree",
        fp: "The defendant was the owner and operator of a store that sold exotic birds and aviary supplies. The plaintiff was the owner and operator of a pet shop in which dogs, cats, tropical fish, and exotic birds were sold. The defendant kept a trained Amazon parrot on a perch near the sales counter in his store. The bird had an extensive vocabulary and did tricks on his perch to the great amusement of the defendant's customers. The plaintiff wished to have the parrot for his own personal pet and had attempted to purchase him from the defendant on numerous occasions, but the defendant always indicated that he was unwilling to sell. On January 5, the plaintiff again asked the defendant if he would sell the parrot, to which the defendant replied, 'I'd consider selling him to you, but I don't even know what a bird with this parrot's training is worth.' The plaintiff said that he would do some research to find out, if the defendant would promise to seriously consider selling the parrot for whatever they found the proper price to be. Based on their conversation, the plaintiff and the defendant executed the following document: 'The defendant hereby agrees to sell to the plaintiff one trained Amazon parrot for a price to be paid in cash and on delivery, said price to be agreed upon after determining the reasonable value of a bird with the parrot's training.' The plaintiff contacted five generally acknowledged experts in trained exotic birds and received opinions from them regarding the parrot's value that ranged from $700 to $1,000. When the plaintiff attempted to buy the parrot from the defendant for $1,000, however, the defendant indicated that he was unwilling to sell the parrot at any price.",
        q: "The plaintiff sued the defendant and asked for specific performance. Will the court order specific performance of the agreement made on January 5?",
        opts: [
            "Yes, because he offered to pay $1,000 for the parrot.",
            "Yes, but the plaintiff will be required to pay a price for the parrot that the trier of fact finds to be reasonable in light of expert and other evidence presented at the trial.",
            "No, because the January 5 document does not manifest an intent to be bound.",
            "No, because specific performance is not available in an action for breach of a contract for the sale of a chattel."
        ],
        ans: 2,
        exp: "Although a court may reform a contract by filling in a missing term in accordance with the manifest intent of the parties, it may not create a contract where the writing fails to indicate that the parties had the intent of creating one. The January 5 document leaves the price term to subsequent agreement after determining reasonable value. It does not indicate that reasonable value will be the price or set forth any method by which the sale price is to be determined. It is an 'agreement to agree,' and as such, it does not manifest an intention to be bound to any particular terms.\n\nA and B are therefore incorrect. Specific performance may be available in an action for breach of a contract for the sale of a chattel if the chattel is unique. Since a trained, talking bird is probably unique, D is incorrect."
    },
    {
        id: 21,
        topic: "Remedies / Consequential Damages (Foreseeability)",
        fp: "The plaintiff was the owner of an air-conditioning repair company. His employees did all the repair jobs, but the plaintiff himself did the estimating and made price quotes to customers. The plaintiff maintained a fleet of pickup trucks for use by his employees when traveling to and from repair jobs, but the plaintiff usually drove his own personal station wagon when going out to give a potential customer an estimate. On February 15, the plaintiff ordered a new station wagon from the defendant, a new-car dealer. Prior to signing the sales contract, the salesperson who sold him the car explained that the new car could be obtained by the defendant only from the manufacturer. For this reason, she said, it might be as long as two weeks before the defendant could deliver the new car to the plaintiff. The plaintiff said that this would be all right, but that he definitely needed the car by March 10 for use in his business. Based on this discussion, it was agreed that the new car would be ready for him no later than March 5. Immediately following the signing of the sales contract by the plaintiff and the defendant, the salesperson contacted the manufacturer's sales department and placed the order for the plaintiff's car. She explained to the sales representative at the manufacturer that she had contracted to deliver the car to the plaintiff no later than March 5, and that if she was unable to do so, she would probably lose the sale. The sales representative assured her that the car would be delivered on time. On March 4, the plaintiff sold his old station wagon because he believed that he would be receiving the new one the following day. The manufacturer failed to deliver the new car to the defendant until March 30, making it impossible for the defendant to deliver it to the plaintiff on time. The plaintiff instituted an action for breach of contract against the defendant, and he alleged damages that included lost profits resulting from his inability to travel to the premises of potential customers for the purpose of estimating jobs and selling his company's services.",
        q: "Which of the following would be the defendant's most effective argument in response to that allegation?",
        opts: [
            "At the time the contract was formed, it was not foreseeable that late delivery of the automobile would result in business losses.",
            "Late delivery by the manufacturer made performance of the sales contract by the defendant impossible.",
            "The plaintiff could have mitigated damages by renting another vehicle or using one of the company pickup trucks while waiting for delivery of the station wagon.",
            "Consequential damages are not available for the breach of a contract of sale."
        ],
        ans: 2,
        exp: "Losses that are normal but not inevitable results of a breach of contract (e.g., the plaintiff's claim of lost business resulting from non-delivery of the station wagon) are called 'consequential damages,' and they may be recovered if they were foreseeable to the parties at the time the contract was made, and if they could not have been mitigated by the aggrieved party. If the plaintiff could have traveled to the customers' premises by renting a car or by using one of the company pickup trucks, the defendant would not be responsible for damages resulting from his failure to mitigate consequential damages by doing so.\n\nA is incorrect because the plaintiff had advised the salesperson that he needed to use the station wagon for his business, making business losses foreseeable. B is incorrect because impossibility excuses performance only if it results from factors not within the reasonable contemplation of the parties at the time the contract was formed. Here, both parties knew that the defendant was planning to order the station wagon from the manufacturer and could have anticipated that the manufacturer might not deliver the car on time. D is incorrect since consequential damages are available in actions for breach of a sales contract."
    },
    {
        id: 22,
        topic: "Remedies / Quasi-Contract (Quantum Meruit)",
        fp: "A licensed physician was driving home from the hospital where she worked when she saw a pedestrian fall unconscious to the pavement. The doctor stopped her car, examined the pedestrian, and diagnosed that he was experiencing cardiac arrest. After attempting to render medical treatment, the doctor carried the pedestrian to her car and drove him to the hospital. There, she continued attempting to treat him for an hour, after which the pedestrian died without ever having regained consciousness. At the time she assisted the pedestrian, the doctor reasonably expected to be compensated for her services. The doctor subsequently sent the administratrix of the pedestrian's estate a bill for medical services, but the administratrix refused to pay it. The jurisdiction had a 'Good Samaritan' statute. The doctor asserted a claim against the pedestrian's administratrix for the reasonable value of her medical services.",
        q: "Is the doctor entitled to payment?",
        opts: [
            "Yes, because at the time she assisted the pedestrian, she reasonably expected to be compensated for her services.",
            "Yes, because a contract was implied-in-fact.",
            "No, because the pedestrian received no benefit as a result of the doctor's services.",
            "No, because the jurisdiction has a 'Good Samaritan' statute."
        ],
        ans: 0,
        exp: "Even though no contract exists, a party can recover from another on a quasi-contract (i.e., a contract implied-in-law) theory when he or she rendered a service to the other with the reasonable expectation of compensation. Thus, if the doctor had a reasonable expectation of payment at the time she rendered medical services to the pedestrian, she may recover on a quasi-contract theory.\n\nA contract is implied-in-fact when, although the parties have not expressed agreement, their intent to enter into a mutually binding bargain is evident from their conduct and the surrounding circumstances. Since the pedestrian remained unconscious for the entire period during which the doctor rendered services, he could not have acted in a way that manifested the intent to make a binding contract. B is therefore incorrect. C is incorrect because quasi-contract recovery is usually based on the value of the detriment sustained by the plaintiff, rather than that of the benefit received by the defendant. Where they exist, 'Good Samaritan' statutes protect physicians against negligence liability in connection with treatment that they render without expectation of compensation at accident or other emergency scenes. Although 'Good Samaritan' statutes do not extend this protection to a physician who charges for his or her services, they do not prevent him or her from doing so. D is therefore incorrect."
    },
    {
        id: 23,
        topic: "Formation / Promissory Estoppel (Subcontractor Bids)",
        fp: "A developer requested bids from several general contractors to build a new hotel. One of the general contractors asked several subcontractors he knew, including an electrician, a plumber, a drywall hanger, and a painter, to submit bids for their parts of the overall job. The plumber sent in a bid and the contractor notified the plumber that he was accepting the plumber's bid. The contractor then used the plumber's bid in the overall bid that the contractor sent to the developer. The developer ultimately picked the general contractor to build the hotel.",
        q: "Which of the following statements is true?",
        opts: [
            "The contractor's use of the plumber's bid created an option contract through promissory estoppel.",
            "The contractor's use of the plumber's bid operated as an acceptance.",
            "The contractor's use of the plumber's bid created an irrevocable contract when the developer picked the general contractor to build the hotel.",
            "The plumber's bid was an irrevocable firm offer between merchants."
        ],
        ans: 0,
        exp: "In building projects, general contractors often request bids from subcontractors and put those bids together into an overall plan for the project. Under the doctrine of promissory estoppel, when the general contractor notifies a subcontractor that he or she is using the subcontractor's bid in the general contractor's overall bid, the general contractor's use of that bid creates an option contract through promissory estoppel. Specifically, the general contractor has relied on the subcontractor's promise to create the overall bid and the subcontractor's bid has induced the general contractor's reliance on that bid. At this point, an option contract is created to the extent necessary to avoid injustice.\n\nB, C, and D are incorrect because the general contractor's use of the bid creates an option contract through promissory estoppel."
    },
    {
        id: 24,
        topic: "Remedies / Specific Performance & Consideration Adequacy",
        fp: "The defendant, an 84-year-old woman, suffered from Parkinson's disease. She asked the plaintiff, a woman who rented space in her home, to quit her job so she could care for the defendant. The plaintiff agreed and quit her job in return for the defendant's promise that when the defendant died she would leave the house and surrounding farm to the plaintiff. Three days after the agreement was made, the defendant made an appointment to see her lawyer to change her will. However, before she could keep the appointment, she fell ill and was hospitalized. The plaintiff spent a lot of time with her at the hospital, but a few days later, the defendant died. The plaintiff sued the defendant's estate for specific performance of the promise to convey the house and farm.",
        q: "Should the court order specific performance of the promise?",
        opts: [
            "Yes, because she gave up her employment and agreed to take care of the defendant.",
            "Yes, because the defendant showed her intent to honor the agreement by making the appointment with her lawyer.",
            "No, because the house and farm are worth much more than the services actually performed by the plaintiff.",
            "No, because a will speaks at death."
        ],
        ans: 0,
        exp: "Even in equitable claims, courts judge the adequacy of consideration as of the time the contract was made, not as of the time the contract was allegedly breached. Thus, if it appeared fair at the time of contracting, a court will find it enforceable. Here, at the time of contracting, the plaintiff gave up her job and promised to take care of the defendant, a job of unknown difficulty and duration. Consequently, the defendant's promise will be enforced, and the plaintiff is entitled to specific performance. B is incorrect because there is no question here regarding the defendant's intent to gift the property. C is incorrect because even though the house and farm were worth more than the services actually performed by the plaintiff, the contract as it stood at the time of contracting was not grossly unfair or inequitable. D is incorrect because the issue is the agreement between the plaintiff and the defendant, not the will."
    },
    {
        id: 25,
        topic: "Termination / Indirect Revocation",
        fp: "A woman offered to sell her neighbor a trampoline that her children were no longer using. The neighbor asked how much the woman wanted to sell the trampoline for, and the woman said $100. The neighbor told the woman that he'd think it over and the woman said that was O.K. with her. The next morning, the woman sold the trampoline to a man down the street. The neighbor decided to accept the woman's offer, but as he was walking to the woman's house to pay her, he saw the trampoline in the man's backyard. When he asked the man about it, the man said he'd just bought the trampoline from the woman for $100. The neighbor filed suit for breach of contract.",
        q: "Should the court rule in the neighbor's favor?",
        opts: [
            "No, because the neighbor knew the man had already bought the trampoline.",
            "No, because the woman's offer was not in writing.",
            "Yes, because the woman told the neighbor he could think it over.",
            "Yes, because the man bought the trampoline for the same amount as the woman offered to the neighbor."
        ],
        ans: 0,
        exp: "An offeree cannot accept an offer if the offeree learns from a reliable source that the offeror has taken action inconsistent with an intent to enter into a contract with the offeree. Here, the neighbor's power to accept the offer was terminated once he learned that the woman had already sold the trampoline to the man.\n\nB is incorrect because this agreement is not one of the types of agreements where the Statute of Frauds is implicated. C is incorrect because the woman did not make her offer irrevocable by saying the neighbor could think it over. Importantly, there was no consideration holding the offer open. D is incorrect because the fact that the man paid the same amount as the woman asked the neighbor to pay does not change the analysis."
    }
];