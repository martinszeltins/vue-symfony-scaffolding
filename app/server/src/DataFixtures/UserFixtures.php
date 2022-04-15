<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    public function __construct(
        private UserRepository $userRepository,
        private UserPasswordHasherInterface $passwordHasher,
    ) {}

    public function load(ObjectManager $manager): void
    {
        $adminUser = $this->userRepository->findOneBy(['username' => 'admin']);

        if ($adminUser) return;

        $user = new User;
        $user->setUsername('admin');
        $user->setFullName('Administrator');
        $user->setPassword($this->passwordHasher->hashPassword($user, 'admin'));

        $manager->persist($user);
        $manager->flush();
    }
}
