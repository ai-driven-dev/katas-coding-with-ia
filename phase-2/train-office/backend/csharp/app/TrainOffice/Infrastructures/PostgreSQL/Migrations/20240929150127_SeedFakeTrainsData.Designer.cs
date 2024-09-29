﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using TrainOffice.Infrastructures.PostgreSQL.Context;

#nullable disable

namespace TrainOffice.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20240929150127_SeedFakeTrainsData")]
    partial class SeedFakeTrainsData
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("TrainOffice.Infrastructures.DataModels.Coach", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("TrainId")
                        .HasColumnType("integer");

                    b.Property<int>("Type")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("TrainId");

                    b.ToTable("Coach");
                });

            modelBuilder.Entity("TrainOffice.Infrastructures.DataModels.Seat", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("CoachId")
                        .HasColumnType("integer");

                    b.Property<bool>("IsOccupied")
                        .HasColumnType("boolean");

                    b.Property<string>("SeatNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CoachId");

                    b.ToTable("Seat");
                });

            modelBuilder.Entity("TrainOffice.Infrastructures.DataModels.Summary", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Summaries");
                });

            modelBuilder.Entity("TrainOffice.Infrastructures.DataModels.Train", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ArrivalStation")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("ArrivalTime")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("DepartureStation")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("DepartureTime")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Trains");
                });

            modelBuilder.Entity("TrainOffice.Infrastructures.DataModels.Coach", b =>
                {
                    b.HasOne("TrainOffice.Infrastructures.DataModels.Train", "Train")
                        .WithMany("Coaches")
                        .HasForeignKey("TrainId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Train");
                });

            modelBuilder.Entity("TrainOffice.Infrastructures.DataModels.Seat", b =>
                {
                    b.HasOne("TrainOffice.Infrastructures.DataModels.Coach", "Coach")
                        .WithMany("Seats")
                        .HasForeignKey("CoachId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Coach");
                });

            modelBuilder.Entity("TrainOffice.Infrastructures.DataModels.Coach", b =>
                {
                    b.Navigation("Seats");
                });

            modelBuilder.Entity("TrainOffice.Infrastructures.DataModels.Train", b =>
                {
                    b.Navigation("Coaches");
                });
#pragma warning restore 612, 618
        }
    }
}
