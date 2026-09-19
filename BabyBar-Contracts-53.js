// BabyBar-Contracts-53.js
// Total Questions: 25
// Subject: Contracts (Common Law & UCC Article 2) ONLY
// Standard: Master Tier 5 / First-Year Law Students' Examination (Baby Bar) Benchmark
const examData = [
    {
        id: 1,
        topic: "Performance / Condition of Satisfaction (Good Faith)",
        fp: "A town council hired a sculptor to create a statue of a local boxer for $5,000. The contract provided: 'The personal satisfaction of the Mayor is a condition precedent to payment. If the Mayor is unsatisfied, the contract shall be canceled.' The sculptor completed the statue. However, the boxer was recently arrested, and the town feared embarrassment. When the Mayor inspected the statue, he stated: 'It's too small. The deal is off.' The Mayor truly and genuinely believed the statue was too small, although he was also fearful of the scandal. The sculptor sued for payment.",
        q: "Does the town council have to pay for the statue?",
        opts: [
            "Yes, because a reasonable person would have found the sculptor's work to be satisfactory[cite: 5].",
            "Yes, because the mayor was fearful that the statue would embarrass the town[cite: 5].",
            "No, because the contract gave the mayor the absolute right to reject the sculptor's finished work[cite: 5].",
            "No, because the mayor actually believed that the statue was too small[cite: 5]."
        ],
        ans: 3,
        exp: "(D) is the correct response. In a contract conditioning payment on personal satisfaction involving aesthetics or art, the condition is evaluated under a subjective standard[cite: 5]. The promisor is excused from paying if they are genuinely, subjectively dissatisfied with the work, provided the dissatisfaction is in good faith (not a fraudulent pretense to escape the contract)[cite: 5]. Because the facts stipulate that the Mayor 'truly believed the statue was too small,' his subjective dissatisfaction was genuine and in good faith, fulfilling the failure of the condition precedent[cite: 5]. The fact that he was also worried about the scandal does not invalidate his genuine aesthetic objection[cite: 5]. (A) is incorrect because artistic contracts use a subjective standard, not the objective reasonable-person standard[cite: 5]. (B) is incorrect because his genuine aesthetic belief satisfies the good-faith requirement, despite parallel motives[cite: 5]. (C) is incorrect because the right to reject is not 'absolute'; it is constrained by the implied covenant of good faith[cite: 5]."
    },
    {
        id: 2,
        topic: "Promissory Estoppel / Reliance",
        fp: "A plaintiff worked for a corporation for 40 years. The corporation promised her a lifetime pension if she retired. She continued to work for a few more years, then retired after downsizing her home so that her expenses could be covered by the pension. She received the pension for several years before the corporation stopped paying. The plaintiff sued.",
        q: "Is the plaintiff entitled to the pension?",
        opts: [
            "Yes, because she chose to retire when she could have kept on working[cite: 5].",
            "Yes, because she received the pension in recognition of her 40 years of service[cite: 5].",
            "No, because she worked for a few more years after receiving the pension promise[cite: 5].",
            "No, because there was no consideration supporting the promise of the pension[cite: 5]."
        ],
        ans: 0,
        exp: "(A) is the correct response. While past services are not valid consideration, a promise may be enforceable under the equitable doctrine of promissory estoppel (Restatement § 90)[cite: 5]. Promissory estoppel requires a promise that the promisor should reasonably expect to induce action or forbearance, and which does induce justifiable detrimental reliance by the promisee[cite: 5]. The plaintiff relied on the pension promise to her detriment by giving up her salary, retiring, and selling her home[cite: 5]. Therefore, the promise is enforceable to prevent injustice[cite: 5]. (B) is incorrect because the 40 years of service are 'past consideration,' which is legally insufficient to enforce a contract[cite: 5]. (C) is incorrect because delaying retirement does not defeat her eventual detrimental reliance on the promise[cite: 5]. (D) is incorrect because, although there was no traditional consideration, promissory estoppel provides an alternative basis for enforcement[cite: 5]."
    },
    {
        id: 3,
        topic: "Performance / Right to Inspect (UCC 2-513)",
        fp: "A natural foods store agreed to purchase 200 pounds of large nuts from a defendant. The contract provided: 'Payment shall be due immediately on delivery and prior to inspection of the shipment.' A box arrived, and the store owner paid the price without inspecting. One hour later, the owner opened the box and discovered small nuts instead of large nuts. The defendant refused to exchange them, claiming payment constituted acceptance. The store owner returned the nuts and sued for breach.",
        q: "What is the most accurate characterization of the contract provision requiring payment prior to inspection?",
        opts: [
            "It is unconscionable and therefore not subject to enforcement[cite: 5].",
            "It constitutes a waiver of the buyer's right to inspect prior to acceptance[cite: 5].",
            "It does not impair the buyer's right to inspect prior to acceptance[cite: 5].",
            "It was waived because the plaintiff paid before inspecting the goods[cite: 5]."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-512(2), where a contract requires payment before inspection, such payment does NOT constitute acceptance of goods and does not impair the buyer's right to inspect or any of the buyer's remedies[cite: 5]. The buyer retains the full right to open the boxes afterward, discover the nonconformity, and reject the goods or sue for breach[cite: 5]. The store owner may therefore force the distributor to take the small nuts back and refund the money[cite: 5]. (A) is incorrect because requiring payment prior to inspection (e.g., C.O.D. deliveries) is a standard, enforceable commercial practice and is not unconscionable[cite: 5]. (B) and (D) are incorrect because the UCC expressly prevents pre-inspection payment from operating as a waiver or final acceptance[cite: 5]."
    },
    {
        id: 4,
        topic: "Formation / Option Contracts",
        fp: "A musician wanted to buy a $50,000 guitar but did not have the money. He told the store owner he would be back in five months. The store owner wrote: 'For $10, I promise to only sell the guitar to you for the next six months.' The musician paid $10. Five-and-a-half months later, the musician returned with $50,000, but the store owner had already sold the guitar to another person. The musician sued for breach of contract.",
        q: "Should the court rule in the musician's favor?",
        opts: [
            "Yes, because the store owner made a firm offer[cite: 5].",
            "Yes, because the store owner accepted the musician's $10[cite: 5].",
            "No, because the store owner agreed to hold the offer open for longer than 90 days[cite: 5].",
            "No, because the store owner revoked the offer before the musician accepted it[cite: 5]."
        ],
        ans: 1,
        exp: "(B) is the correct response. An option contract is a promise to keep an offer open that is supported by independent consideration. Under the common law, if an offeree gives consideration (even a small amount like $10) to hold an offer open, a binding option contract is created, and the offeror cannot revoke the offer for the agreed-upon period[cite: 5]. Because the musician paid $10, the store owner was bound to hold the guitar for six months. Selling it to someone else breached this option contract[cite: 5]. (A) and (C) are incorrect because a UCC 'firm offer' is a signed promise by a merchant to hold an offer open *without* consideration, and it is capped at three months. Here, actual consideration was paid, creating a true option contract, which has no time limit[cite: 5]. (D) is incorrect because an option contract is irrevocable; the store owner lacked the power to revoke[cite: 5]."
    },
    {
        id: 5,
        topic: "Consideration / Output & Requirements Contracts",
        fp: "An airline agreed to buy all of its jet fuel requirements from a supplier at a price pegged to the industry-wide posted crude oil index. Because of a war, the price increased dramatically. The supplier reneged on the agreement, claiming it lacked mutuality because the airline was not required to buy a specific amount. The airline sued.",
        q: "Will the court enforce the contract?",
        opts: [
            "No, because the war was not foreseeable at the time of contracting[cite: 5].",
            "No, because the plaintiff was not bound to buy any goods at all[cite: 5].",
            "Yes, because it bound itself to act reasonably and in good faith in estimating the quantity of fuel it required[cite: 5].",
            "Yes, because a mere price increase due to a war would not invalidate the agreement[cite: 5]."
        ],
        ans: 2,
        exp: "(C) is the correct response. A requirements contract is one where the buyer promises to buy all of its requirements from the seller[cite: 5]. Under UCC § 2-306, such agreements do not lack mutuality of obligation because the buyer is bound by an implied statutory duty to determine its requirements in good faith and according to commercial standards of fair dealing[cite: 5]. This good-faith limitation on the buyer's discretion provides the necessary consideration to make the contract binding[cite: 5]. (A) and (D) focus on commercial impracticability, but the core issue the supplier raised is mutuality. Furthermore, a dramatic price increase tied to an agreed-upon market index is a foreseeable business risk assumed in the contract; it does not trigger commercial impracticability[cite: 5]. (B) is incorrect because the good faith obligation binds the buyer[cite: 5]."
    },
    {
        id: 6,
        topic: "Assignment & Delegation / Successive Assignments",
        fp: "A lead singer contracted to record a song for a defendant for $2,000. On March 15, the singer bought a piano, assigning to the piano seller his right to collect the $2,000 from the defendant. The piano seller immediately notified the defendant. On April 1, the singer assigned the same right to his landlord to avoid eviction. The landlord immediately notified the defendant. On April 20, the singer sued the defendant for non-payment of the $2,000.",
        q: "Which of the following facts would be most likely to result in a judgment for the defendant?",
        opts: [
            "The singer was an infant at the time of all the transactions[cite: 5].",
            "The singer made at least one effective assignment of the right to collect the $2,000[cite: 5].",
            "The singer's performance was so bad that the record can never be commercially released[cite: 5].",
            "A statute prohibited the assignment of future wages by employees[cite: 5]."
        ],
        ans: 1,
        exp: "(B) is the correct response. An effective assignment transfers the assignor's contract rights entirely to the assignee, extinguishing the assignor's right to enforce the contract[cite: 5]. If the singer made a valid assignment of his $2,000 claim to the piano seller (or the landlord), he no longer possesses the legal right to collect the money from the defendant[cite: 5]. Therefore, the defendant's best defense against a lawsuit by the *singer* is that the singer gave up his rights via the assignment[cite: 5]. (A) is incorrect because infancy makes a contract voidable by the minor, not the defendant, and would require the defendant to pay the minor upon disaffirmance[cite: 5]. (C) is incorrect assuming the contract paid for the recording session regardless of release[cite: 5]. (D) is incorrect because the singer is likely an independent contractor, and if the assignment is invalid, the defendant would just owe the singer directly[cite: 5]."
    },
    {
        id: 7,
        topic: "Performance / Condition Precedent (Subjective Satisfaction)",
        fp: "A plaintiff agreed to design a coat of arms and carve it into a wooden door for a defendant for $650. The agreement stated that if the defendant was not completely satisfied with the coat of arms and door, he would be under no obligation. The plaintiff delivered a properly designed and carved door, fabricated in a workmanlike manner. The defendant glanced at it and said, 'I just don't like it,' and refused to accept it. The defendant's dissatisfaction was genuine.",
        q: "In an action by the plaintiff against the defendant, which of the following would be the defendant's best defense?",
        opts: [
            "The agreement was not in writing as required by the Statute of Frauds[cite: 5].",
            "The agreement was an offer for a unilateral contract that the defendant rejected[cite: 5].",
            "The defendant's subjective satisfaction was a condition precedent to his obligation to accept the door[cite: 5].",
            "Since the coat of arms was not yet associated with the defendant, the plaintiff could find another buyer[cite: 5]."
        ],
        ans: 2,
        exp: "(C) is the correct response. When a contract involves personal taste, aesthetics, or fancy (like a custom-carved coat of arms), an express condition of personal satisfaction is evaluated under a subjective standard[cite: 5]. The promisor is excused from paying if he is genuinely, subjectively dissatisfied with the work, provided he acts in good faith[cite: 5]. Because the defendant was subjectively telling the truth, his dissatisfaction means the condition precedent to his duty to pay was not met[cite: 5]. (A) is incorrect because the Statute of Frauds does not apply to custom-manufactured goods that cannot be resold, and the price is near the threshold anyway[cite: 5]. (B) is incorrect because the agreement was a bilateral exchange of promises, not a unilateral contract[cite: 5]. (D) is incorrect because a custom family crest cannot easily be resold, and mitigation is a defense to the *amount* of damages, not liability[cite: 5]."
    },
    {
        id: 8,
        topic: "Consideration / Bargained-for Exchange",
        fp: "A landfill had excess recycled plastic it didn't want to pay to have removed. The landfill gave a construction firm free recycled plastic for use in its construction work. All the firm had to do was come to the landfill and pick it up. The plastic turned out to be defective, and the firm sued the landfill for breach of contract. The landfill argued there was no consideration because it had merely made a conditional gift.",
        q: "Can the firm successfully sue for breach of contract?",
        opts: [
            "Yes, because the firm relied on the landfill's promise to its detriment[cite: 5].",
            "Yes, because the landfill wanted the firm to take the plastic and benefited when it did so[cite: 5].",
            "No, because the landfill did not bargain for the firm's performance[cite: 5].",
            "No, because the unwanted plastic was a gift[cite: 5]."
        ],
        ans: 1,
        exp: "(B) is the correct response. Consideration requires a bargained-for exchange. An exchange is bargained for if the promisor's promise induces the promisee's detriment, and the promisee's detriment induces the promisor's promise[cite: 5]. Even if the parties did not expressly negotiate, the landfill offered the plastic specifically to induce the firm to haul it away, thereby saving the landfill disposal costs[cite: 5]. The firm incurred the detriment of driving its trucks and hauling the material in exchange for the plastic[cite: 5]. This mutual inducement satisfies the requirement of consideration, creating a binding contract rather than a conditional gift[cite: 5]. (A) is incorrect because finding actual consideration makes the fallback doctrine of promissory estoppel unnecessary[cite: 5]. (C) and (D) are incorrect because the mutual inducement of benefit and detriment legally constitutes bargaining, creating consideration[cite: 5]."
    },
    {
        id: 9,
        topic: "Consideration / Pre-Existing Duty (Rewards)",
        fp: "A baby was kidnapped. The parents announced a $1 million reward to anyone who found the kidnapper. A local on-duty police officer received a tip, went to a vacant brownstone, apprehended the kidnapper, and rescued the baby. The officer requested the reward money, but the parents refused. The officer sued.",
        q: "Should the court rule in the police officer's favor?",
        opts: [
            "No, because the police officer had a preexisting duty to arrest the kidnapper[cite: 5].",
            "No, because the police officer failed to accept the reward offer before arresting the kidnapper[cite: 5].",
            "Yes, because the police officer accepted the reward offer with his performance[cite: 5].",
            "Yes, because the police officer knew about the reward offer before beginning performance[cite: 5]."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under the pre-existing duty rule, performing an act that one is already legally obligated to perform cannot serve as consideration for a new promise[cite: 5]. An on-duty police officer has a statutory and occupational obligation to investigate crimes, apprehend fugitives, and rescue kidnapping victims[cite: 5]. Because the officer was merely doing his legal duty, his actions provided no valid consideration to support the reward offer[cite: 5]. The agreement is unenforceable. (B) is incorrect because unilateral contracts are accepted by performance, not advance notice[cite: 5]. (C) and (D) are incorrect because the preexisting duty rule invalidates the consideration required to accept the unilateral offer, regardless of his knowledge or performance[cite: 5]."
    },
    {
        id: 10,
        topic: "Parol Evidence / Explaining Ambiguity",
        fp: "A homeowner and a handyman signed a handwritten agreement: 'The handyman will paint the outside of the house for $700 as follows: wood trim brown; doors green; siding yellow (two coats).' The handyman painted the siding with two coats, but gave the trim and doors only one coat. The homeowner refused to pay, claiming they had orally agreed prior to executing the agreement that the handyman would apply two coats to all surfaces. The handyman sued. At trial, the homeowner attempted to testify about the prior oral agreement.",
        q: "Is the homeowner's testimony admissible?",
        opts: [
            "Yes, only for the purpose of establishing that the phrase '(two coats)' is ambiguous[cite: 5].",
            "Yes, for the purpose of establishing that the phrase '(two coats)' is ambiguous and explaining the ambiguity[cite: 5].",
            "No, because the agreement was written by the handyman[cite: 5].",
            "No, because the writing was a complete expression of the agreement of the parties[cite: 5]."
        ],
        ans: 1,
        exp: "(B) is the correct response. The Parol Evidence Rule prohibits extrinsic evidence of prior agreements to contradict the terms of an unambiguous, completely integrated written contract[cite: 5]. However, extrinsic evidence is universally admissible to establish that a written term is ambiguous, and if it is ambiguous, to explain its meaning[cite: 5]. The placement of '(two coats)' at the end of the list creates a syntactic ambiguity: it could apply only to the siding, or it could apply collectively to the trim, doors, and siding[cite: 5]. The homeowner's testimony is admissible to explain this ambiguity[cite: 5]. (A) is incorrect because the testimony is admissible not only to establish ambiguity but also to explain it[cite: 5]. (C) is incorrect because the identity of the drafter does not trigger the Parol Evidence Rule[cite: 5]. (D) is incorrect because even in a completely integrated contract, parol evidence is admissible to resolve ambiguities[cite: 5]."
    },
    {
        id: 11,
        topic: "Consideration / Compromise of Invalid Claim",
        fp: "A man collapsed in the desert and was saved by a retired doctor. The doctor fed him and gave him medical treatment. The man said, 'I can never pay you,' and the doctor replied, 'I'm not doing this for money.' The man's mother later wrote to the doctor, promising to pay $350. Both died. The doctor's administrator indicated he intended to make a claim against the mother's estate. To settle this, the mother's husband signed a document agreeing to pay $350 in consideration of the services rendered and the administrator's promise to make no claim against the estate. The husband refused to pay.",
        q: "Were the services rendered by the doctor sufficient consideration for the husband's promise?",
        opts: [
            "Yes, because they imposed a preexisting moral obligation on the husband[cite: 5].",
            "No, because they were not requested by the husband[cite: 5].",
            "Yes, because the husband received a material benefit from them[cite: 5].",
            "No, because the reasonable value of the services was too speculative[cite: 5]."
        ],
        ans: 1,
        exp: "(B) is the correct response. Consideration requires a bargained-for exchange[cite: 5]. A promise made in recognition of a past benefit generally lacks consideration because the action was not bargained for or performed in exchange for the promise ('past consideration is no consideration')[cite: 5]. The doctor acted independently to save the son; the husband did not ask or bargain for the rescue prior to the act[cite: 5]. Therefore, the services themselves are NOT consideration for the husband's subsequent promise[cite: 5]. (Note: the administrator's promise *not to sue the estate* might be consideration, but the question specifically asks if the *services* are consideration)[cite: 5]. (A) and (C) are incorrect because under the material benefit rule (Restatement § 86), a subsequent promise to pay for a past life-saving act might be enforceable if the promisor himself received the direct material benefit, but courts rarely extend this to third parties (the husband)[cite: 5]. (D) is incorrect because the inability to quantify value is not the doctrinal reason the claim fails; it fails strictly for lack of a bargained-for exchange[cite: 5]."
    },
    {
        id: 12,
        topic: "Formation / Option Contracts & Promissory Estoppel",
        fp: "A family rented a summer camp every year for 20 years. The owner sent a signed letter to the family member who always signed the contract: 'State A wants to rent the camp for 20 years. Since I've relied on you for so long, I hereby give you an irrevocable firm offer to hold the offer to rent my camp open until April 1.' The family didn't respond immediately. A week later, the family learned the owner signed with State A. The family sued to enforce the agreement.",
        q: "Should the court rule in the family member's favor?",
        opts: [
            "Yes, because the summer camp owner had relied on the family member's rental for 20 years[cite: 5].",
            "Yes, because the family member had relied on the summer camp's rental for 20 years[cite: 5].",
            "No, because the summer camp owner had already signed a rental agreement with the university[cite: 5].",
            "No, because the promise to keep the offer open lacked consideration and was not a UCC firm offer[cite: 5]."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under the common law, a promise to keep an offer open is revocable at will unless it is supported by consideration, creating an option contract[cite: 5]. The UCC 'firm offer' rule (UCC § 2-205), which makes signed merchant offers irrevocable without consideration, applies ONLY to the sale of goods. Renting real estate (a summer camp) is governed by the common law[cite: 5]. Because the family provided no consideration to hold the offer open, the owner's promise was unenforceable, and he was legally free to revoke it by selling to the university[cite: 5]. (A) and (B) are incorrect because past reliance (the previous 20 years) does not constitute consideration for a new promise, and the family did not demonstrate new detrimental reliance on the recent letter[cite: 5]. (C) is incorrect because the failure is due to lack of consideration for the option, making the revocation lawful[cite: 5]."
    },
    {
        id: 13,
        topic: "Consideration / Past Consideration",
        fp: "A factory employee suggested an idea to improve efficiency. Her boss told her to try it out. The idea saved the factory a lot of money. The boss then promised the employee a $5,000 bonus on June 1 because of her 'great work' with the efficiency idea. On May 25, the boss decided to use the savings for executive bonuses instead and refused to pay the employee. The employee sued.",
        q: "Should the court rule in the employee's favor?",
        opts: [
            "No, because there was no consideration to support the promise[cite: 5].",
            "No, because the promise violated the Statute of Frauds[cite: 5].",
            "Yes, because the employee had conferred a material benefit to the factory[cite: 5].",
            "Yes, because the boss had notified the employee of the future bonus[cite: 5]."
        ],
        ans: 0,
        exp: "(A) is the correct response. A promise must be supported by consideration (a bargained-for exchange) to be enforceable[cite: 5]. A promise made in recognition of a benefit previously received by the promisor is generally not binding because it is based on 'past consideration,' which is legally no consideration[cite: 5]. The employee had already devised and implemented the efficiency method before the boss promised the bonus[cite: 5]. Because the employee did not perform the work in exchange for the promise, the promise is an unenforceable gratuitous gift[cite: 5]. (B) is incorrect because a $5,000 bonus payable on June 1 can be performed within a year, so the Statute of Frauds does not apply[cite: 5]. (C) is incorrect because the material benefit rule usually applies to life-or-death emergencies, not ordinary employment performance[cite: 5]. (D) is incorrect because notice does not cure a lack of consideration[cite: 5]."
    },
    {
        id: 14,
        topic: "Third-Party Beneficiaries / Assignment & Delegation",
        fp: "A landowner and a contractor decided to give a house as a wedding present to their children. They contracted with a builder to construct it. The contract stated the builder would collect half his payment from the landowner and half from the contractor. The contractor later became ill and sold his painting business to his son, who promised to do all the painting on the house. The son later refused to paint it. The landowner then decided he did not want to convey the property to his daughter and the contractor's son. The contractor's son sued the landowner.",
        q: "Which of the following arguments would furnish the landowner with his strongest defense?",
        opts: [
            "The contractor's son was only an incidental beneficiary of the contract between the landowner and the contractor[cite: 5].",
            "The contractor's son did not rely or assent to the contract between the landowner and the contractor[cite: 5].",
            "The contractor's son's painting of the house was a condition precedent to the landowner's obligation to convey[cite: 5].",
            "The contract between the contractor and the builder breached a fiduciary obligation[cite: 5]."
        ],
        ans: 0,
        exp: "(A) is the correct response. A third party can enforce a contract only if they are an intended beneficiary. An intended beneficiary exists if the promisee intended to give the beneficiary the benefit of the promised performance[cite: 5]. Here, the landowner's primary intent in making the contract with the contractor was to benefit the *daughter* (by giving her a house), not to benefit the contractor's son (who was marrying the daughter)[cite: 5]. Because the contractor's son was not the primary intended beneficiary of the landowner's promise, he is classified as an incidental beneficiary and possesses no standing to sue the landowner for breach[cite: 5]. (B) is incorrect because reliance and assent are relevant only for vesting the rights of *intended* beneficiaries[cite: 5]. (C) is incorrect because the painting agreement was a separate subsequent subcontract, not a condition precedent to the landowner's original promise[cite: 5]. (D) is incorrect because assignments of commercial painting duties do not generally breach fiduciary obligations[cite: 5]."
    },
    {
        id: 15,
        topic: "Terms / Implied Condition of Good Faith",
        fp: "A businessman running for government office entered into a written contract with a golf pro to redesign his golf course, completion by November 30. During negotiations, the businessman said the redesign was dependent on him winning the election. The golf pro orally agreed the redesign was dependent on the businessman winning. The pro finished the redesign on November 6. The businessman lost the election and refused to pay the bill.",
        q: "What would be the businessman's best argument against paying the contract?",
        opts: [
            "The purpose of the contract was frustrated by the businessman failing to win the election[cite: 5].",
            "Winning the election was a condition precedent to the contract[cite: 5].",
            "The rules of construction allow evidence of the oral agreement to clear up the ambiguity in the contract[cite: 5].",
            "At the time of the contract, both parties believed that the businessman would win the election[cite: 5]."
        ],
        ans: 1,
        exp: "(B) is the correct response. Parol evidence is admissible to show that a written agreement was subject to an oral condition precedent to its legal effectiveness[cite: 5]. If the parties orally agree that a written contract will not become binding unless a specific event occurs, the non-occurrence of that event means the contract never comes into existence[cite: 5]. The businessman can argue that winning the election was an agreed-upon condition precedent; because he lost, the contract never became effective, and he is not obligated to pay[cite: 5]. (A) is incorrect because frustration of purpose requires an unforeseeable supervening event that completely destroys the value of the contract. Losing an election is highly foreseeable, and the golf course can still be used[cite: 5]. (C) is incorrect because there is no ambiguous term in the written contract to explain[cite: 5]. (D) is incorrect because an erroneous prediction about a future event (an election) is not a mutual mistake of present fact[cite: 5]."
    },
    {
        id: 16,
        topic: "Remedies / Buyer's Damages for Non-Delivery (UCC 2-713)",
        fp: "A farmer contracted to sell 2,000 bushels of beans to a restaurant at $2 a bushel, delivery in June. In April, heavy rains destroyed part of her crop. She called the restaurant and said she could only deliver 1,000 bushels. The restaurant said, 'I'll take whatever you deliver, but I intend to hold you to the terms of our contract.' On June 15, the farmer delivered 1,000 bushels. On that date, beans were readily available on the open market at $2 per bushel. The restaurant sued the farmer for damages resulting from breach of contract.",
        q: "Which of the following would be the farmer's most effective argument in defense?",
        opts: [
            "Her inability to deliver 2,000 bushels was the result of an Act of God[cite: 5].",
            "She notified the restaurant on April 15 that she would be unable to deliver more than 1,000 bushels[cite: 5].",
            "The restaurant sustained no substantial damage, since the contract price equaled the market price on the day of delivery[cite: 5].",
            "Her obligation to other buyers took priority[cite: 5]."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-713, a buyer's damages for a seller's non-delivery are measured by the difference between the market price at the time the buyer learned of the breach and the contract price, plus incidental and consequential damages. Because the market price on the date of delivery ($2) was identical to the contract price ($2), the buyer suffered zero direct expectation damages[cite: 5]. While the restaurant could theoretically recover nominal damages or incidental damages (e.g., the cost of finding a new supplier), it sustained no substantial compensatory damage[cite: 5]. (A) is incorrect because crop destruction does not excuse a seller of generic commodities (unless the contract specifies they must be grown on a specific plot of land)[cite: 5]. (B) is incorrect because the restaurant expressly reserved its rights ('holding you to the contract'), preventing a modification or waiver[cite: 5]. (D) is incorrect because a seller cannot prioritize other contracts to excuse a breach[cite: 5]."
    },
    {
        id: 17,
        topic: "Formation / Unilateral Contract Acceptance",
        fp: "A homeowner found that someone had stolen a hand-carved milking stool from his garage. Angry, he went into a nearby bar and said loudly, 'I'll pay $1,000 to anyone who finds the thief that stole a hand-carved stool out of my garage last night.' The owner of the bar heard the statement and said, 'I'll catch that thief for you.'",
        q: "Which of the following statements most correctly describes the position of the homeowner and the owner of the bar?",
        opts: [
            "The homeowner has made an offer for a unilateral contract that became irrevocable when the owner of the bar promised to catch the thief[cite: 5].",
            "The homeowner and the owner of the bar are parties to a bilateral contract[cite: 5].",
            "The homeowner has not made any offer that can be accepted by the owner of the bar[cite: 5].",
            "The homeowner has made an offer for a unilateral contract that the owner of the bar can accept only by catching the thief[cite: 5]."
        ],
        ans: 3,
        exp: "(D) is the correct response. An offer of a reward to the public ('I'll pay $1,000 to anyone who finds the thief') is an offer for a unilateral contract[cite: 5]. A unilateral contract requests acceptance by full performance of the specified act, not by a return promise[cite: 5]. Because the homeowner requested the act of catching the thief, the bartender's verbal promise ('I'll catch that thief') was legally ineffective as an acceptance[cite: 5]. The bartender can accept the offer only by actually catching the thief[cite: 5]. (A) is incorrect because promising to perform does not make a unilateral offer irrevocable; only the commencement of actual performance does[cite: 5]. (B) is incorrect because the offer did not invite a promissory acceptance, so no bilateral contract was formed[cite: 5]. (C) is incorrect because, despite the anger, the statement contained specific, definite terms promising a specific reward for a specific act, which a reasonable person would interpret as a valid offer[cite: 5]."
    },
    {
        id: 18,
        topic: "Remedies / Liquidated Damages & Specific Performance",
        fp: "A landowner contracted with a builder to construct a building on one parcel. As compensation, the landowner agreed to convey a second parcel to the builder. The contract contained a liquidated damages clause in the event of a breach. After the builder completed construction, the landowner refused to convey the second parcel. The builder sued, demanding liquidated damages, actual damages, or an order directing the landowner to convey the parcel.",
        q: "Which of the following correctly describes the builder's rights against the landowner?",
        opts: [
            "If the liquidated damages clause established a penalty, the court can enter a judgment for any actual damages; if it did not, the court can direct the landowner to perform as agreed[cite: 5].",
            "If the liquidated damages clause established a penalty, the court can properly enter judgment for any actual damages that resulted from the landowner's breach[cite: 5].",
            "If the liquidated damages clause did not establish a penalty, the court can properly direct the landowner to perform as agreed[cite: 5].",
            "The builder has no enforceable rights[cite: 5]."
        ],
        ans: 0,
        exp: "(A) is the correct response. A liquidated damages clause is enforceable if it is a reasonable estimate of difficult-to-ascertain damages. If it is unreasonable, it is void as a penalty, and the injured party is relegated to actual damages. Crucially, the presence of a valid liquidated damages clause does NOT automatically preclude the equitable remedy of specific performance, particularly in real estate contracts where land is deemed unique[cite: 5]. A court can still order the landowner to convey the parcel to the builder[cite: 5]. Option (A) is the most complete statement of the law: if it's a penalty, the builder gets actual damages; if it's not a penalty (it's valid), the court still retains the equitable power to order specific performance instead of enforcing the monetary liquidated damages[cite: 5]. (B) and (C) are partially correct but incomplete compared to (A)[cite: 5]. (D) is completely incorrect[cite: 5]."
    },
    {
        id: 19,
        topic: "Performance / Conditions Precedent",
        fp: "A man spent his time drinking at a tavern. On September 1, his mother stated orally that if he promised to go to law school and stop drinking for the rest of his life, she would give him $10,000 on July 1 of the following year. He promised, stopped drinking, and began law school. In December, he withdrew from school. On July 1, the mother refused to pay. He sued.",
        q: "Which of the following would be the mother's most effective argument in response to that claim?",
        opts: [
            "The plaintiff's completion of law school was an implied condition precedent to his mother's promise to pay $10,000[cite: 5].",
            "The mother's promise was not supported by consideration[cite: 5].",
            "The mother's promise was not in writing[cite: 5].",
            "The plaintiff's remaining in law school until July 1 was an implied condition precedent to his mother's duty to pay[cite: 5]."
        ],
        ans: 3,
        exp: "(D) is the correct response. A condition precedent is an event that must occur before a party's duty to perform becomes absolute. Conditions can be express or implied. Because the mother promised to pay the money on a specific date (July 1) in exchange for the plaintiff going to law school and staying sober, a court would reasonably imply that the plaintiff remaining enrolled in law school up to the payment date of July 1 was a condition precedent to her duty to pay[cite: 5]. Because he dropped out in December, the condition failed, excusing her payment[cite: 5]. (A) is incorrect because requiring full 'completion' of a 3-year law school program by July 1 is factually impossible and illogical; remaining enrolled is the sensible implied condition[cite: 5]. (B) is incorrect because forbearance from a legal right (drinking) is valid consideration[cite: 5]. (C) is incorrect because a lifetime promise can be performed within a year if the promisor dies, escaping the Statute of Frauds[cite: 5]."
    },
    {
        id: 20,
        topic: "Assignment & Delegation / Delegation of Personal Services",
        fp: "A defendant inherited a crop-dusting business. Although she didn't fly, she hired pilots. She contracted with a farmer to dust his crop four times a year for four years, paid upfront. After two years, she sold the business to a local pilot, assigning the balance of the contract. The farmer sued, asserting that crop-dusting involves a personal service and the sale breached the obligation.",
        q: "Which of the following would be the defendant's most effective argument in response?",
        opts: [
            "An assignment of contract rights includes a delegation of contract duties[cite: 5].",
            "The pilot had more expertise at crop-dusting than the defendant did[cite: 5].",
            "The defendant had never personally participated in dusting the plaintiff's fields[cite: 5].",
            "The assignment did not impose an additional burden on the plaintiff since there was no change in price[cite: 5]."
        ],
        ans: 2,
        exp: "(C) is the correct response. Duties that involve personal services (depending on the obligor's special skills or reputation) are generally non-delegable because the obligee bargained for that specific person's abilities. However, the fact that the original owner *never personally participated* in the spraying for the first two years indicates that the farmer did not actually bargain for the owner's personal, unique flying skills[cite: 5]. Therefore, the duty is a routine commercial service, which is freely delegable[cite: 5]. (A) is a true statement under the UCC, but does not address the core issue of whether the duty was a non-delegable personal service[cite: 5]. (B) is incorrect because if a duty genuinely requires personal services, it cannot be delegated even to someone more highly skilled without consent[cite: 5]. (D) is incorrect because financial burden relates to the assignment of *rights*, whereas the objection here is to the delegation of *duties*[cite: 5]."
    },
    {
        id: 21,
        topic: "Defenses / Duress vs Economic Hardship",
        fp: "A corporation had cash-flow problems placing it in danger of insolvency. A bank refused to lend money unless a major shareholder agreed to guarantee payment. Fearful of losing her investment, the shareholder promised to guarantee the loan. The corporation defaulted, and the bank asserted a claim against the shareholder. The shareholder offered several defenses.",
        q: "Which of the following additional facts, if true, would be most likely to lead a court to find in favor of the shareholder?",
        opts: [
            "The shareholder's promise to pay the corporation's debt was induced by the fear that the corporation could not continue to exist without the loan[cite: 5].",
            "The shareholder's promise to pay the corporation's debt was not in writing[cite: 5].",
            "The shareholder received nothing of value in return for her promise to pay the corporation's debt[cite: 5].",
            "The assets that the corporation offered to turn over to the bank later were sufficient to repay the loan[cite: 5]."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under the Statute of Frauds, a promise to answer for the debt or default of another (a suretyship or guarantee) must be in writing and signed by the party to be charged[cite: 5]. If the shareholder's promise was not in writing, it is completely unenforceable[cite: 5]. (A) is incorrect because economic duress requires that the assent be induced by an *improper threat*. A creditor's hard bargaining or refusal to lend money without adequate security is standard commercial practice, not an improper threat, so the shareholder's fear does not void the contract[cite: 5]. (C) is incorrect because the loan to the corporation serves as valid consideration for the guarantor's promise; the shareholder doesn't need to receive separate direct value[cite: 5]. (D) is incorrect because a guarantor is liable immediately upon default, regardless of the corporation's subsequent offers of assets[cite: 5]."
    },
    {
        id: 22,
        topic: "Assignment & Delegation / Novation vs Assignment",
        fp: "A landlord leased a storefront to a tenant for three years. After two years, the tenant assigned the balance of the lease to a woman, advising the landlord in writing that the woman would be paying the rent. The landlord accepted rent directly from the woman for five months. Then she moved out and stopped paying. The landlord sued the original tenant for unpaid rent.",
        q: "Which of the following arguments would be most effective in the tenant's defense?",
        opts: [
            "The landlord's accepting rent from the woman resulted in an accord and satisfaction[cite: 5].",
            "By accepting rent from the woman, the landlord impliedly consented to the tenant's assignment to the woman[cite: 5].",
            "A prohibition against assignment of a leasehold interest is a restraint against alienation[cite: 5].",
            "The landlord's accepting rent from the woman resulted in a novation[cite: 5]."
        ],
        ans: 3,
        exp: "(D) is the correct response. When a party assigns a contract or delegates duties, the assignor/delegator remains secondarily liable for the performance of the contract (as a surety) unless the obligee expressly releases them through a novation[cite: 5]. A novation is the substitution by mutual consent of a new party, completely discharging the original party[cite: 5]. While simply accepting rent does not usually constitute a novation, arguing that the landlord's conduct *did* amount to a novation is the ONLY argument listed that would completely relieve the tenant of liability[cite: 5]. (A) is incorrect because an accord and satisfaction settles a disputed debt, which did not occur here[cite: 5]. (B) is incorrect because even if the landlord consented to the assignment, the original tenant remains secondarily liable[cite: 5]. (C) is incorrect because restraints on alienation are enforceable in leases, and regardless, an invalid assignment would leave the tenant primarily liable[cite: 5]."
    },
    {
        id: 23,
        topic: "Formation / Option Contracts & Revocation",
        fp: "A seller owned a rare painting. A buyer said she needed until February 1 to raise cash. On January 15, the seller signed a document stating: 'I offer to sell the painting to the buyer for $50,000 and promise to hold the offer open until February 2.' On January 20, the seller sold the painting to someone else. On January 21, the buyer read about the sale in a newspaper. She immediately went to the seller's home with $50,000 cash and demanded the painting. The seller refused.",
        q: "Is the buyer entitled to damages resulting from the seller's sale of the painting?",
        opts: [
            "Yes, because she accepted the seller's offer before the seller withdrew it[cite: 5].",
            "Yes, because the seller promised in writing to hold the offer open until February 2[cite: 5].",
            "No, because a judgment for damages is not an appropriate remedy for breach of a contract to sell a unique chattel[cite: 5].",
            "No, because when the buyer tendered payment, she knew that the seller had already sold the painting[cite: 5]."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under general contract principles, an offer terminates when the offeree receives reliable information that the offeror has taken definite action inconsistent with an intention to enter into the proposed contract (such as selling the property to someone else)[cite: 5]. When the buyer read in the newspaper that the seller had sold the painting, the offer was effectively revoked by indirect notice[cite: 5]. Because the offer was revoked before the buyer attempted to accept with the cash, no contract was formed[cite: 5]. (Note: If this were a firm offer under the UCC, it would be irrevocable, but the facts do not indicate the seller is a merchant, so it is a common law offer lacking consideration)[cite: 5]. (A) is incorrect because she did not accept before it was withdrawn via the newspaper[cite: 5]. (B) is incorrect because the promise to hold the offer open lacked consideration[cite: 5]. (C) is incorrect because damages are always available for breach; specific performance is an *additional* remedy for unique chattels[cite: 5]."
    },
    {
        id: 24,
        topic: "Parol Evidence / Trade Usage & Interpretation (UCC 2-202)",
        fp: "A buyer and seller signed a written contract for 100 kilograms of 'rock lurgid' fish at a premium price. When the seller delivered the first shipment, the buyer refused it, complaining the fish were 'scmods.' The buyer was aware that 'scmods' are frequently referred to as 'rock lurgid' in the industry. The seller sued. At trial, the seller attempted to testify that in the fresh fish industry, 'scmods' is frequently referred to as 'rock lurgid.'",
        q: "If the buyer objects, should this testimony be admitted?",
        opts: [
            "No, because it modifies the terms of a written contract that the parties intended to be a complete record[cite: 5].",
            "No, because the price agreed to is higher than the market price of scmods[cite: 5].",
            "Yes, to explain the meaning of the term 'rock lurgid' as used in the contract[cite: 5].",
            "Yes, because the buyer was aware of the fact that scmods is frequently referred to as 'rock lurgid'[cite: 5]."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-202, even a completely integrated written contract may be explained or supplemented by course of dealing, course of performance, or usage of trade[cite: 5]. Trade usage is admissible to show that a seemingly clear term has a specialized commercial meaning that the parties are presumed to have intended[cite: 5]. Showing that the industry refers to 'scmods' as 'rock lurgid' explains the contract's terminology without contradicting the writing[cite: 5]. (A) is incorrect because trade usage is admissible even for complete integrations[cite: 5]. (B) is incorrect because the price term does not bar evidence explaining the subject matter[cite: 5]. (D) is incorrect because trade usage is admissible objectively to explain the contract's meaning; it does not strictly depend on proving the buyer's subjective awareness to be admitted[cite: 5]."
    },
    {
        id: 25,
        topic: "Third-Party Beneficiaries / Vesting & Modification",
        fp: "A father promised his daughter a house as a wedding present. The father signed a contract with a builder to construct it. The contract explicitly stated it was for the daughter. The daughter canceled a contract to buy another home. Later, the father and builder modified the contract to build a less expensive house. The daughter informed them she was dissatisfied and sued the builder.",
        q: "What is the builder's most effective argument in defense?",
        opts: [
            "The daughter did not rely to her detriment on her father's promise to give her a house built according to any particular plans[cite: 5].",
            "The daughter was a donee beneficiary because the house was being built as a wedding present[cite: 5].",
            "The daughter was a creditor beneficiary because the contract was made after her father promised her the house[cite: 5].",
            "The daughter was not an intended third-party beneficiary of the contract[cite: 5]."
        ],
        ans: 0,
        exp: "(A) is the correct response. An intended third-party donee beneficiary can enforce a contract if her rights have vested[cite: 5]. Rights vest when the beneficiary: (1) manifests assent to the contract; (2) brings a lawsuit to enforce it; or (3) materially changes her position in justifiable reliance on the contract (Restatement § 311)[cite: 5]. Once the rights vest, the original parties lose the power to modify or rescind the agreement without the beneficiary's consent[cite: 5]. The builder's best defense is to attack the vesting by arguing that canceling her other house contract was reliance on getting *a* house, not detrimental reliance on the *specific architectural plans* that were later modified[cite: 5]. (B) is incorrect because being a donee beneficiary does not prevent her from enforcing the contract once vested[cite: 5]. (C) is incorrect because she is receiving a gift, not satisfying a debt, making her a donee beneficiary[cite: 5]. (D) is incorrect because the contract explicitly stated it was for her, clearly making her an intended beneficiary[cite: 5]."
    }
];